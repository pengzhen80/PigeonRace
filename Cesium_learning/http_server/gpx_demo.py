import xml.etree.ElementTree as ET


class MyTransParams:
    def __init__(self):
        self.latitude = ''
        self.longitude = ''
        self.elevation = ''
        self.time = ''
        self.distance = ''
        self.heading = ''
        self.speed = ''
        self.nextPoint = {}

    def add_nextPoint(self, lan, lon, ele):
        self.nextPoint['latitude'] = lan
        self.nextPoint['longitude'] = lon
        self.nextPoint['elevation'] = ele

    def get_nextPoint(self):
        result = MyTransParams()
        result.latitude = self.nextPoint['latitude']
        result.longitude = self.nextPoint['longtitude']
        result.elevation = self.nextPoint['elevation']
        return result


# import gpxpy
# import gpxpy.gpx
# import gpxpy.gpxfield as mod_field

# Parsing an existing file:
# -------------------------


def gpx_reader(path):
    result = []
    gpx_file = open(path, 'r')

    gpx_xml = ET.parse(gpx_file)
    # print(gpx_xml)
    root = gpx_xml.getroot()
    for trk in root:
        # print(trk.tag)
        for name in trk:
            # print(name.tag)
            for trkpt in name:
                cell = {}
                # print(trkpt.attrib['lat'],trkpt.attrib['lon'])
                cell['latitude'] = float(trkpt.attrib['lat'])
                # print(cell.latitude)
                # print(cell.latitude)
                cell['longitude'] = float(trkpt.attrib['lon'])
                # print(cell.longitude)
                # print(trkpt.tag)
                for ele in trkpt:
                    # if ele.tag == ''
                    # print(ele.tag)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}time':
                        cell['time'] = ele.text
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}speed':
                        # print(ele.text)
                        cell['speed'] = float(ele.text)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}ele':
                        # print(ele.text)
                        cell['elevation'] = float(ele.text)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}distance':
                        # print(ele.text)
                        cell['distance'] = float(ele.text)
                        # print(cell.distance)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}heading':
                        # print(ele.text)
                        cell['heading'] = int(ele.text)
                result.append(cell)

    print(len(result))
    return result


def gpx_reader_multiFiles(paths):
    result = []
    for path in paths:
        features = gpx_reader(path)
        # print(features)
        result.append(features)
    print(len(result))
    gpxToArray(result)
    return result

def gpxToArray(features):
    file = open('./files_array/gpx_array.txt','a+')
    for feature in features:
        file.write(str(feature))
        file.write(',')
    file.close()

import os
# if __name__ == '__main__':
#     filenames = ['./gpxfiles/2021-02-0142906.gpx']
#     filenames_subline = os.listdir('./gpxfiles/sub_lines')
#     for name in filenames_subline:
#         filenames.append('./gpxfiles/sub_lines/'+name)
#     # filenames.append('./gpxfiles/sub_lines/'+filenames_subline[0])
#     print(filenames)
#     gpx_data = gpx_reader_multiFiles(filenames)
    # print(len(gpx_data))
if __name__ == '__main__':
    filenames = os.listdir('./gpxfiles/sub_lines')
    file_paths = []
    for name in filenames:
<<<<<<< HEAD
        file_paths.append('./gpxfiles/sub_lines/'+name)
    # file_paths.append('./gpxfiles/sub_lines/'+filenames[0])
=======
        file_paths.append('./gpxfiles/gpx_tw/'+name)
    # file_paths.append('./gpxfiles/gpx_tw/'+filenames[0])
>>>>>>> 16d523cbdc91a3d080a2ce7379fb1c3a3d66ba09
    print(file_paths)
    # filenames.append('./gpxfiles/sub_lines/'+filenames_subline[0])
    # print(filenames)
    gpx_data = gpx_reader_multiFiles(file_paths)
    # print(len(gpx_data))