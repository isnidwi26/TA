# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

import traceback
from apps.home import blueprint
from flask import render_template, request
from flask_login import login_required
from jinja2 import TemplateNotFound
import json

from ..proses_ml import KasusDBDxKelembapan

import csv


@blueprint.route('/index')
def index():
    with open('dataTA.csv', mode='r') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        tahun = []
        kasusDBD = []
        tavg = []
        rhavg = []
        ss = []
        line_count = 0

        for row in csv_reader:
            if line_count == 0:
                line_count += 1
            else:
                tahun.append(row[0])
                kasusDBD.append(row[1])
                tavg.append(row[2])
                rhavg.append(row[3])
                ss.append(row[4])
                line_count += 1
    print(f'Processed {line_count} lines.')
    print(kasusDBD)
    data = {
        'chart_labels': tahun,
        'chart_kasusDBD': kasusDBD,
        'chart_suhu': tavg,
        'chart_kelembapan': rhavg,
        'chart_ss': ss
    }

    return render_template('home/index.html', segment='index', data=data)


@blueprint.route('/<template>')
def route_template(template):

    try:
        if not template.endswith('.html'):
            template += '.html'

        # Detect the current page
        segment = get_segment(request)

        if template == 'arima.html':
            hasil_data_prediksi = KasusDBDxKelembapan.uji_data_prediction()
            hasil_data_peramalan = KasusDBDxKelembapan.uji_data_forecast()
            hasil_uji_akurasi = KasusDBDxKelembapan.uji_akurasi()
            hasil_uji_korelasi = KasusDBDxKelembapan.uji_korelasi()

            print(hasil_data_peramalan.to_json())
            print(hasil_data_prediksi.to_json())
            print(hasil_uji_akurasi)
            print(hasil_uji_korelasi)

            return render_template(
                "home/" + template, segment=segment, hasil_prediksi=hasil_data_prediksi.to_json(date_format='iso'), hasil_peramalan=hasil_data_peramalan.to_json(date_format='iso'), hasil_uji_akurasi=json.dumps(hasil_uji_akurasi),
                hasil_uji_korelasi=hasil_uji_korelasi.to_json())

        # Serve the file (if exists) from app/templates/home/FILE.html
        return render_template("home/" + template, segment=segment)

    except TemplateNotFound:
        return render_template('home/page-404.html'), 404

    except Exception:
        traceback.print_exc()
        return render_template('home/page-500.html'), 500


# Helper - Extract current page name from request
def get_segment(request):

    try:

        segment = request.path.split('/')[-1]

        if segment == '':
            segment = 'index'

        return segment

    except:
        return None
