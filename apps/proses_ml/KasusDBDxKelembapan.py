from unittest import result
from statsmodels.tsa.statespace.varmax import VARMAX, VARMAXResults
from statsmodels.tools.eval_measures import mse, rmse
import warnings
from timeit import default_timer as timer
from statsmodels.tsa.vector_ar.vecm import coint_johansen
from statsmodels.tsa.stattools import adfuller
from pmdarima import auto_arima
from sklearn import metrics, preprocessing
import numpy as np
import pandas as pd
from statsmodels.tsa.stattools import acf, pacf
import statsmodels.api as sm
import math

# visualizations
import matplotlib.pyplot as plt
from pylab import rcParams
rcParams['figure.figsize'] = (12, 5)


# handle warnings
warnings.filterwarnings(action='ignore', category=DeprecationWarning)
warnings.filterwarnings(action='ignore', category=FutureWarning)


def Augmented_Dickey_Fuller_Test_func(series, column_name):
    print(f'Results of Dickey-Fuller Test for column: {column_name}')
    datatest = adfuller(series, autolag='AIC')
    dataoutput = pd.Series(datatest[0:4], index=[
                           'Test Statistic', 'p-value', 'No Lags Used', 'Number of Observations Used'])
    for key, value in datatest[4].items():
        dataoutput['Critical Value (%s)' % key] = value


def inverse_diff(actual_df, pred_df):
    df_res = pred_df.copy()
    columns = actual_df.columns
    for col in columns:
        df_res['inv_'+str(col)] = actual_df[col].iloc[-2] + \
            df_res[str(col)].cumsum()
    return df_res


def timeseries_evaluation_metrics_func(y_true, y_pred):

    def mean_absolute_percentage_error(y_true, y_pred):
        y_true, y_pred = np.array(y_true), np.array(y_pred)
        return np.mean(np.abs((y_true - y_pred) / y_true)) * 100

    rmse = np.sqrt(metrics.mean_squared_error(y_true, y_pred))
    mape = metrics.mean_absolute_percentage_error(y_true, y_pred)*100

    # print('Evaluation metric results:-')
    # print(f'RMSE is : {rmse}')
    # print(f'MAPE is : {mape}', end='\n\n')

    data = {
        'RMSE': rmse,
        'MAPE': mape
    }
    return data

    # INPUT DATA
dataTA = pd.read_csv('dataTA.csv', parse_dates=['Tahun'], index_col='Tahun')
dataTA.index.freq = 'MS'
data = dataTA[['KasusDBD', 'RHavg']]
data.columns = ['KasusDBD', 'RHavg']


def uji_korelasi():
    return data.corr()


def uji_data_prediction():
    # NORMALISASI DATA
    max_kasus = data['KasusDBD'].max()
    max_kelembapan = data['RHavg'].max()
    data['KasusDBD'] = data['KasusDBD']/max_kasus
    data['RHavg'] = data['RHavg']/max_kelembapan
    n = 3

    # PREDICTION
    # TRAIN TEST SPLIT PREDICTION
    train, test = data[0:-n], data[-n:]
    train_diff = train.diff().diff()
    train_diff.dropna(inplace=True)

    # VARMA MODEL ORDER SELECTION
    varma_model_pred = VARMAX(train_diff[['KasusDBD', 'RHavg']], order=(
        4, 0), enforce_stationarity=True)
    fitted_model_pred = varma_model_pred.fit(disp=False)

    # PROSES PREDIKSI
    m = len(train_diff)
    predict = fitted_model_pred.get_prediction(start=0, end=m+n-1)
    prediction = predict.predicted_mean

    # PROSES INVERS DIFFERENCING
    inv_predict = inverse_diff(data, prediction)

    # MENYATUKAN DATA ASLI DENGAN DATA PREDIKSI
    data2 = data[2:]
    results_prediction = pd.concat(
        [data2, inv_predict[['inv_KasusDBD', 'inv_RHavg']]], axis=1)

    # DENORMALISASI DATA
    results_prediction['inv_KasusDBD'] = results_prediction['inv_KasusDBD'] * \
        dataTA['KasusDBD'].max()
    results_prediction['inv_RHavg'] = results_prediction['inv_RHavg'] * \
        dataTA['RHavg'].max()
    results_prediction['KasusDBD'] = results_prediction['KasusDBD'] * \
        dataTA['KasusDBD'].max()
    results_prediction['RHavg'] = results_prediction['RHavg'] * \
        dataTA['RHavg'].max()

    # KONVERSI DATA KASUS DBD DARI FLOAT MENJADI INTEGER
    results_prediction[['inv_KasusDBD']] = results_prediction[[
        'inv_KasusDBD']].apply(np.int64)

    # mengganti header data
    results_prediction.columns = results_prediction.columns.str.strip(
    ).str.lower().str.replace("inv", "pred")
    print("hasil prediksi: \n", results_prediction)
    finally_prediction = results_prediction
    return finally_prediction


def uji_data_forecast():
    # NORMALISASI DATA
    max_kasus = data['KasusDBD'].max()
    max_kelembapan = data['RHavg'].max()
    data['KasusDBD'] = data['KasusDBD']/max_kasus
    data['RHavg'] = data['RHavg']/max_kelembapan
    n = 3
    # FORECAST
    data_diff = data.diff().diff()
    data_diff.dropna(inplace=True)

    varma_model_forecast = VARMAX(
        data_diff[['KasusDBD', 'RHavg']], order=(4, 0), enforce_stationarity=True)
    fitted_model_forecast = varma_model_forecast.fit(disp=False)

    # proses peramalan
    o = len(data_diff)
    fcast = fitted_model_forecast.get_prediction(start=o, end=o+n-1)
    forecast = fcast.predicted_mean

    # invers data
    inv_forecast = inverse_diff(data, forecast)
    results_forecast = inv_forecast[["inv_KasusDBD", "inv_RHavg"]]
    print("hasil invers forecast: ", results_forecast)

    # denormalisasi
    results_forecast['inv_KasusDBD'] = results_forecast['inv_KasusDBD'] * \
        dataTA['KasusDBD'].max()
    results_forecast['inv_RHavg'] = results_forecast['inv_RHavg'] * \
        dataTA['RHavg'].max()

    # float to integer
    results_forecast[['inv_KasusDBD']] = round(
        results_forecast[['inv_KasusDBD']])

    # mengganti header data
    results_forecast.columns = results_forecast.columns.str.strip(
    ).str.lower().str.replace("inv", "forecast")
    print("hasil forecast: ", results_forecast)
    finally_forecast = results_forecast
    return finally_forecast


def uji_akurasi():
    # PROSES MENGHITUNG NILAI AKURASI

    akurasi = []
    n = 3
    data_prediction = uji_data_prediction()

    test = data[-n:]
    test['KasusDBD'] = test['KasusDBD']*dataTA['KasusDBD'].max()
    test['RHavg'] = test['RHavg']*dataTA['RHavg'].max()
    data_prediction = data_prediction[-n:]
    prediksi = pd.concat(
        [test, data_prediction[['pred_kasusdbd', 'pred_rhavg']]], axis=1)
    prediksi.columns = prediksi.columns.str.lower()
    print(prediksi)

    eval_prediksi = prediksi[-n:]

    for i in ['kasusdbd', 'rhavg']:
        print(f'Evaluation metric for {i}')
        akurasi.append(timeseries_evaluation_metrics_func(
            eval_prediksi[str(i)], eval_prediksi['pred_'+str(i)]))
    return akurasi
