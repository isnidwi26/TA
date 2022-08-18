# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from apps.home import blueprint
from flask import render_template, request
from flask_login import login_required
from jinja2 import TemplateNotFound

import csv


@blueprint.route('/index')
@login_required
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
        'chart_kelembapan' : rhavg,
        'chart_ss': ss
    }

    return render_template('home/index.html', segment='index', data=data)


@blueprint.route('/<template>')
@login_required
def route_template(template):

    try:

        if not template.endswith('.html'):
            template += '.html'

        # Detect the current page
        segment = get_segment(request)

        # Serve the file (if exists) from app/templates/home/FILE.html
        return render_template("home/" + template, segment=segment)

    except TemplateNotFound:
        return render_template('home/page-404.html'), 404

    except:
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
