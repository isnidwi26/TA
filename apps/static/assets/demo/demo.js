type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initTemplate: function () {
    gradientChartOptionsConfigurationWithTooltipBlue = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 85,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };
  
    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };
    
  
    gradientChartOptionsConfigurationWithTooltipOrange = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };
  
    gradientChartOptionsConfigurationWithTooltipGreen = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };
  
  
    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
  
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],
  
        xAxes: [{
  
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: chart_labels,
      datasets: [{
        label: "Jumlah Kasus DBD",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: chart_kasusDBD,
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });


    // var ctxGreen = document.getElementById("chartLineGreen").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: chart_labels,
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: chart_kasusDBD,
      }]
    };

    // var myChart = new Chart(ctxGreen, {
    //   type: 'line',
    //   data: data,
    //   options: gradientChartOptionsConfigurationWithTooltipGreen

    // });



    //var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    //var chart_data = [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100];


    var ctxBig = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctxBig.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_kelembapan,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipBlue
    };
    var myChartData = new Chart(ctxBig, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_kelembapan;
      data.labels = chart_labels;
      myChartData.update();
    });
    $("#1").click(function() {
      //var chart_data = [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_suhu;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#2").click(function() {
      //var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
      var data = myChartData.config.data;
      data.datasets[0].data = chart_ss;
      data.labels = chart_labels;
      myChartData.update();
    });

  },

  initDBDChart: function(chart_labels,chart_kasusDBD,chart_suhu,chart_kelembapan,chart_ss) {

    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 5,
            suggestedMax: 30,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };


    var ctx = document.getElementById("chartLinePurple").getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    var data = {
      labels: chart_labels,
      datasets: [{
        label: "Jumlah Kasus DBD",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: chart_kasusDBD,
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });

    var ctxBig = document.getElementById("chartBig1").getContext('2d');

    var gradientStroke = ctxBig.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    var config = {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Data",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d346b1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d346b1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d346b1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: chart_kelembapan,
        }]
      },
      options: gradientChartOptionsConfigurationWithTooltipPurple
    };
    var myChartData = new Chart(ctxBig, config);
    $("#0").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_kelembapan;
      data.labels = chart_labels;
      myChartData.update();
    });
    $("#1").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_suhu;
      data.labels = chart_labels;
      myChartData.update();
    });

    $("#2").click(function() {
      var data = myChartData.config.data;
      data.datasets[0].data = chart_ss;
      data.labels = chart_labels;
      myChartData.update();
    });


  },

  initARIMApage: function (chart_prediksi,chart_peramalan,tabel_korelasi,tabel_akurasi) {
    //PREDIKSI
    var obj_prediksi = JSON.parse(chart_prediksi)
    var tahun = Object.keys(obj_prediksi.kasusdbd);
    var kasus_asli_prediksi = [];
    var kelembapan_asli_prediksi = [];
    var prediksi_kasus = [];
    var prediksi_kelembapan = [];
    var label_tahun_prediksi = [];

    //PERAMALAN
    var obj_peramalan = JSON.parse(chart_peramalan)
    var tahun_peramalan = Object.keys(obj_peramalan.forecast_kasusdbd)
    var peramalan_kasus = [];
    var peramalan_kelembapan = [];
    var label_tahun_peramalan = [];

    //KORELASI
    var obj_korelasi = JSON.parse(tabel_korelasi)
    var label_korelasi = Object.keys(obj_korelasi.KasusDBD)
    var korelasi_kasusdbd = [];
    var korelasi_rhavg = [];

    //AKURASI
    var obj_akurasi = JSON.parse(tabel_akurasi)
    var label_akurasi = ["RMSE","MAPE"]
    var rmse_kasusdbd = [];
    var rmse_rhavg = [];
    rmse_kasusdbd.push(obj_akurasi[0]['RMSE'])
    rmse_kasusdbd.push(obj_akurasi[0]['MAPE'])
    rmse_rhavg.push(obj_akurasi[1]['RMSE'])
    rmse_rhavg.push(obj_akurasi[1]['MAPE'])
    
    for(var item of label_korelasi){
      korelasi_kasusdbd.push(obj_korelasi.KasusDBD[item])
      korelasi_rhavg.push(obj_korelasi.RHavg[item])
    }
    
    for (var item_tahun of tahun){
      kasus_asli_prediksi.push(obj_prediksi.kasusdbd[item_tahun])
      kelembapan_asli_prediksi.push(obj_prediksi.rhavg[item_tahun])
    }

    for (var item_tahun of tahun){
      prediksi_kasus.push(obj_prediksi.pred_kasusdbd[item_tahun])
      prediksi_kelembapan.push(obj_prediksi.pred_rhavg[item_tahun])
    }

    for (var item_tahun of tahun_peramalan){
      peramalan_kasus.push(obj_peramalan.forecast_kasusdbd[item_tahun])
      peramalan_kelembapan.push(obj_peramalan.forecast_rhavg[item_tahun])
    }

    for (var item_tahun of tahun){
      label_tahun_prediksi.push(item_tahun.replace('T00:00:00.000Z',''))
    }

    for (var item_tahun of tahun_peramalan){
      label_tahun_peramalan.push(item_tahun.replace('T00:00:00.000Z',''))
    }


    // TABLE DATA PERAMALAN
    const tbody = document.getElementById("table-data-peramalan")
    for(let index = 0;index < label_tahun_peramalan.length;index++){
      tbody.innerHTML += `
      <tr>
      <td class="text-center">${label_tahun_peramalan[index]}</td>
      <td class="text-center">${peramalan_kasus[index]}</td>
      </tr>
      `
    }
    
    // TABLE DATA KORELASI
    const tbody2 = document.getElementById("table-data-korelasi")
    for(let index = 0;index < label_korelasi.length;index++){
      tbody2.innerHTML += `
      <tr>
      <td class="text-center">${label_korelasi[index]}</td>
      <td class="text-center">${korelasi_kasusdbd[index]}</td>
      <td class="text-center">${korelasi_rhavg[index]}</td>
      </tr>
      `
    }

    // TABLE DATA AKURASI
    const tbody3 = document.getElementById("table-data-akurasi")
    for(let index = 0;index < obj_akurasi.length;index++){
     tbody3.innerHTML += `
      <tr>
      <td class="text-center">${label_akurasi[index]}</td>
      <td class="text-center">${rmse_kasusdbd[index]}</td>
      </tr>
      `
    }

    
    // CHART PREDIKSI KASUS DBD
    gradientChartOptionsConfigurationWithTooltipPurple = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 1000,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],
  
        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };  
    var ctx = document.getElementById("PredictionDBDChart").getContext("2d");
    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, 'rgba(72,72,176,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    gradientStroke2.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke2.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke2.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    var data = {
      labels: label_tahun_prediksi,
      datasets: [{
        label: "Kasus DBD",
        fill: true,
        backgroundColor: gradientStroke1,
        borderColor: '#d048b6',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#d048b6',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#d048b6',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: kasus_asli_prediksi,
      },{
        label: "Prediksi Kasus DBD",
        fill: true,
        backgroundColor: gradientStroke2,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: prediksi_kasus,
      },]
    };
    var myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipPurple
    });
    

    //CHART PREDIKSI KELEMBAPAN
    // gradientChartOptionsConfigurationWithTooltipGreen = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
  
    //   tooltips: {
    //     backgroundColor: '#f5f5f5',
    //     titleFontColor: '#333',
    //     bodyFontColor: '#666',
    //     bodySpacing: 4,
    //     xPadding: 12,
    //     mode: "nearest",
    //     intersect: 0,
    //     position: "nearest"
    //   },
    //   responsive: true,
    //   scales: {
    //     yAxes: [{
    //       barPercentage: 1.6,
    //       gridLines: {
    //         drawBorder: false,
    //         color: 'rgba(29,140,248,0.0)',
    //         zeroLineColor: "transparent",
    //       },
    //       ticks: {
    //         suggestedMin: 50,
    //         suggestedMax: 100,
    //         padding: 20,
    //         fontColor: "#9e9e9e"
    //       }
    //     }],
  
    //     xAxes: [{
    //       barPercentage: 1.6,
    //       gridLines: {
    //         drawBorder: false,
    //         color: 'rgba(0,242,195,0.1)',
    //         zeroLineColor: "transparent",
    //       },
    //       ticks: {
    //         padding: 20,
    //         fontColor: "#9e9e9e"
    //       }
    //     }]
    //   }
    // };
    // var ctxGreen = document.getElementById("PredictionRHAVGChart").getContext("2d");
    // var gradientStroke1 = ctxGreen.createLinearGradient(0, 230, 0, 50);
    // var gradientStroke2 = ctxGreen.createLinearGradient(0, 230, 0, 50);
    // gradientStroke1.addColorStop(1, 'rgba(72,72,176,0.2)');
    // gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    // gradientStroke1.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors
    // gradientStroke2.addColorStop(1, 'rgba(66,134,121,0.15)');
    // gradientStroke2.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    // gradientStroke2.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    // var data = {
    //   labels: label_tahun_prediksi,
    //   datasets: [{
    //     label: "Kelembapan",
    //     fill: true,
    //     backgroundColor: gradientStroke1,
    //     borderColor: '#d048b6',
    //     borderWidth: 2,
    //     borderDash: [],
    //     borderDashOffset: 0.0,
    //     pointBackgroundColor: '#d048b6',
    //     pointBorderColor: 'rgba(255,255,255,0)',
    //     pointHoverBackgroundColor: '#d048b6',
    //     pointBorderWidth: 20,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 15,
    //     pointRadius: 4,
    //     data: kelembapan_asli_prediksi,
    //   },{
    //     label: "Prediksi kelembapan",
    //     fill: true,
    //     backgroundColor: gradientStroke2,
    //     borderColor: '#00d6b4',
    //     borderWidth: 2,
    //     borderDash: [],
    //     borderDashOffset: 0.0,
    //     pointBackgroundColor: '#00d6b4',
    //     pointBorderColor: 'rgba(255,255,255,0)',
    //     pointHoverBackgroundColor: '#00d6b4',
    //     pointBorderWidth: 20,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 15,
    //     pointRadius: 4,
    //     data: prediksi_kelembapan,
    //   },{
    //     label: "Peramalan kelembapan",
    //     fill: true,
    //     backgroundColor: gradientStroke,
    //     borderColor: '#00d6b4',
    //     borderWidth: 2,
    //     borderDash: [],
    //     borderDashOffset: 0.0,
    //     pointBackgroundColor: '#00d6b4',
    //     pointBorderColor: 'rgba(255,255,255,0)',
    //     pointHoverBackgroundColor: '#00d6b4',
    //     pointBorderWidth: 20,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 15,
    //     pointRadius: 4,
    //     data: peramalan_kelembapan,
    //   }]
    // };
    // var myChart = new Chart(ctxGreen, {
    //   type: 'line',
    //   data: data,
    //   options: gradientChartOptionsConfigurationWithTooltipGreen
    // });


    //CHART PERAMALAN
    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
  
      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
  
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 100,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],
  
        xAxes: [{
  
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };
    // CHART PERAMALAN KASUS DBD
    var ctx = document.getElementById("ForecastDBDChart").getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); 
    var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: label_tahun_peramalan,
        datasets: [{
          label: "Peramalan Kasus DBD",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: peramalan_kasus,
        }]
      },
      options: gradientBarChartConfiguration
    });
    //CHART PERAMALAN KELEMBAPAN
    // var ctx = document.getElementById("ForecastRHAVGChart").getContext("2d");
    // var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    // gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    // gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    // gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); 
    // var myChart = new Chart(ctx, {
    //   type: 'bar',
    //   responsive: true,
    //   legend: {
    //     display: false
    //   },
    //   data: {
    //     labels: label_tahun_peramalan,
    //     datasets: [{
    //       label: "Peramalan Kelembapan",
    //       fill: true,
    //       backgroundColor: gradientStroke,
    //       hoverBackgroundColor: gradientStroke,
    //       borderColor: '#1f8ef1',
    //       borderWidth: 2,
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       data: peramalan_kelembapan,
    //     }]
    //   },
    //   options: gradientBarChartConfiguration
    // });

  },


  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8ec3b9"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1a3646"
          }]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#64779e"
          }]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#4b6878"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#334e87"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#6f9ba5"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3C7680"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#304a7d"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#2c6675"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#9d2a80"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#b0d5ce"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#023e58"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#98a5be"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1d2c4d"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#283d6a"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3a4762"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#0e1626"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#4e6d70"
          }]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};