from datetime import date
from fileinput import filename
import http.server
import imp
import socketserver
import socketserver
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs

import urllib
import xml.etree.ElementTree as ET

import logging
from time import sleep
import time

from gpx_management import gpx_reader, gpx_reader_multiFiles
import os

# gpx parser


class TestHttpHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        # self.send_header("Content-type", "text/html")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        # reply gpx file data
        # gpx_data = gpx_reader("./gpxfiles/2021-02-0142906.gpx")
        # print(len(gpx_data))
        # myreply = []

        # self.latitude = ''
        # self.longitude = ''
        # self.elevation = ''
        # self.time = ''
        # self.distance = ''
        # self.heading = ''
        # self.speed = ''

        # for i in range(0,len(gpx_data)):
        #     reply_cell = {}
        #     reply_cell['latitude'] = gpx_data[i].latitude
        #     reply_cell['longitude'] = gpx_data[i].longitude
        #     reply_cell['elevation'] = gpx_data[i].elevation
        #     reply_cell['time'] = gpx_data[i].time
        #     reply_cell['distance'] = gpx_data[i].distance
        #     reply_cell['heading'] = gpx_data[i].heading
        #     reply_cell['speed'] = gpx_data[i].speed
        #     myreply.append(reply_cell)
        # print(len(myreply))
        # str_myreply = str(myreply)
        # self.wfile.write(str_myreply.encode("utf-8"))

        filenames = ['./gpxfiles/2021-02-0142906.gpx']
        filenames_subline = os.listdir('./gpxfiles/sub_lines')
        for name in filenames_subline:
            filenames.append('./gpxfiles/sub_lines/'+name)
        # filenames.append('./gpxfiles/sub_lines/'+filenames_subline[0])
        print(filenames)
        gpx_data = gpx_reader_multiFiles(filenames)
        print(len(gpx_data))

        # make reply
        myreply = []

        for i in range(0, len(gpx_data)):
            reply_cell = []
            for j in range(0, len(gpx_data[i])):
                reply_cell_cell = {}
                reply_cell_cell['latitude'] = gpx_data[i][j].latitude
                reply_cell_cell['longitude'] = gpx_data[i][j].longitude
                reply_cell_cell['elevation'] = gpx_data[i][j].elevation
                reply_cell_cell['time'] = gpx_data[i][j].time
                reply_cell_cell['distance'] = gpx_data[i][j].distance
                reply_cell_cell['heading'] = gpx_data[i][j].heading
                reply_cell_cell['speed'] = gpx_data[i][j].speed
                reply_cell.append(reply_cell_cell)
            myreply.append(reply_cell)
        print(len(myreply))
        str_myreply = str(myreply)
        self.wfile.write(str_myreply.encode("utf-8"))

    def do_POST(self):
        # First, send a 200 OK response.
        self.send_response(200)

        # Then send headers.
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()

        # 2. Put the response together out of the form and the stored messages.
        # mesg = form.format("n".join(memory))
        # self.wfile.write(mesg.encode())
        # 3. Send the response.

    def do_PUT(self):
        self.send_response(400)
        self.end_headers()

    def do_DELETE(self):
        self.send_response(400)
        self.end_headers()


PORT = 4443


if __name__ == '__main__':
    with socketserver.TCPServer(("127.0.0.1", PORT), TestHttpHandler) as httpd:
        print("serving at port", PORT)
        # if(httpd.verify_request(request=))
        httpd.serve_forever()
