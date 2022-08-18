chart = {
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



    initDashboardPageCharts: function() {

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

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

        //setup
        const data = {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
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
            data: [80, 100, 70, 80, 120, 80],
        };

        //config
        const config = {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipPurple
        };

        //render init
        const myChart = new Chart(
            document.getElementById("chartLinePurple"),
            config
        );

       // var ctx = document.getElementById("chartLinePurple").getContext("2d");

       // var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);


    


    },

}