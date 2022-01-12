class MyTransParams:
    def __init__(self):
        self.latitude = ''
        self.longitude = ''
        self.elevation = ''
        self.time = ''
        self.distance = ''
        self.heading = 225
        self.speed = ''
        self.nextPoint = {}
    
    def add_nextPoint(self,lan,lon,ele):
        self.nextPoint['latitude'] = lan
        self.nextPoint['longitude'] = lon
        self.nextPoint['elevation'] = ele
            
    def get_nextPoint(self):
        result = MyTransParams()
        result.latitude = self.nextPoint['latitude']
        result.longitude = self.nextPoint['longtitude']
        result.elevation = self.nextPoint['elevation']
        return result         
    

import gpxpy
import gpxpy.gpx
import gpxpy.gpxfield as mod_field

# Parsing an existing file:
# -------------------------

import xml.etree.ElementTree as ET
            
def gpx_reader(path):
    result = []
    gpx_file = open(path, 'r')
    # gpx_xml = ET.parse(gpx_file)
    # # print(gpx_xml)
    # root = gpx_xml.getroot()
    # for trk in root:
    #     # print(trk.tag)
    #     for name in trk:
    #         # print(name.tag)
    #         for trkpt in name:
    #             cell = MyTransParams()
    #             # print(trkpt.attrib['lat'],trkpt.attrib['lon'])
    #             cell.latitude = trkpt.attrib['lat']
    #             cell.longitude = trkpt.attrib['lon']
    #             # print(trkpt.tag)
    #             for ele in trkpt:
    #                 # if ele.tag == ''
    #                 # print(ele.tag)
    #                 if ele.tag == '{http://www.topografix.com/GPX/1/1}time':
    #                     cell.time = ele.text
    #                 if ele.tag == '{http://www.topografix.com/GPX/1/1}speed':
    #                         # print(ele.text)
    #                     cell.speed = ele.text
    #                 if ele.tag == '{http://www.topografix.com/GPX/1/1}ele':
    #                     # print(ele.text)
    #                     cell.elevation = ele.text
    #                 if ele.tag == '{http://www.topografix.com/GPX/1/1}distance':
    #                     # print(ele.text)
    #                     cell.distance = ele.text
    #                 if ele.tag == '{http://www.topografix.com/GPX/1/1}heading':
    #                     # print(ele.text)
    #                     cell.heading = ele.text
    #             result.append(cell)
                

    # mod_field.GPXField('speed',attribute='speed',type=mod_field.FLOAT_TYPE)
    gpx = gpxpy.parse(gpx_file)
    for track in gpx.tracks:
        for segment in track.segments:
            print(len(segment.points))
            # print(len(segment.extensions))
            len_points = len(segment.points)
            points = segment.points
            for i in range(0,len_points-1):
                cell = MyTransParams()
                cell.latitude = points[i].latitude
                # print(cell.latitude)
                cell.longitude = points[i].longitude
                # print(cell.longitude)
                cell.elevation = points[i].elevation
                cell.time = points[i].time
                if(i<len_points-1):
                    cell.distance = points[i].distance_3d(points[i+1])
                    cell.add_nextPoint(points[i+1].latitude,points[i+1].longitude,points[i+1].elevation)
                else:
                    cell.distance = 0
                # print(cell.distance)

                result.append(cell)
                
    print(len(result))
    return result

import gpx_management
if __name__ == '__main__':
    featrues = gpx_reader("./gpxfiles/2021-02-0142906.gpx")
    tmp_features = gpx_management.gpx_reader("./gpxfiles/2021-02-0142906.gpx")
    print(len(featrues))
    print(len(tmp_features))
    count = 0
    for i in range(0,len(featrues)-1):
        if featrues[i].latitude != tmp_features[i].latitude : 
            print("lantitude is error")
        if featrues[i].longitude != tmp_features[i].longitude:
            print("longitude is error")
        if featrues[i].distance != tmp_features[i].distance:
            print(featrues[i].distance,tmp_features[i].distance)
# for waypoint in gpx.waypoints:
#     print('waypoint {0} -> ({1},{2})'.format(waypoint.name, waypoint.latitude, waypoint.longitude))

# for route in gpx.routes:
#     print('Route:')
#     for point in route.points:
#         print('Point at ({0},{1}) -> {2}'.format(point.latitude, point.longitude, point.elevation))
# There are many more utility methods and functions:
# You can manipulate/add/remove tracks, segments, points, waypoints and routes and
# get the GPX XML file from the resulting object:


# print('GPX:', gpx.to_xml())

# # Creating a new file:
# # --------------------

# gpx = gpxpy.gpx.GPX()

# # Create first track in our GPX:
# gpx_track = gpxpy.gpx.GPXTrack()
# gpx.tracks.append(gpx_track)

# # Create first segment in our GPX track:
# gpx_segment = gpxpy.gpx.GPXTrackSegment()
# gpx_track.segments.append(gpx_segment)

# # Create points:
# gpx_segment.points.append(gpxpy.gpx.GPXTrackPoint(2.1234, 5.1234, elevation=1234))
# gpx_segment.points.append(gpxpy.gpx.GPXTrackPoint(2.1235, 5.1235, elevation=1235))
# gpx_segment.points.append(gpxpy.gpx.GPXTrackPoint(2.1236, 5.1236, elevation=1236))

# # You can add routes and waypoints, too...

# print('Created GPX:', gpx.to_xml())