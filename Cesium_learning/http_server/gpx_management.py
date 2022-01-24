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
    

# import gpxpy
# import gpxpy.gpx
# import gpxpy.gpxfield as mod_field

# Parsing an existing file:
# -------------------------

import xml.etree.ElementTree as ET
            
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
                cell = MyTransParams()
                # print(trkpt.attrib['lat'],trkpt.attrib['lon'])
                cell.latitude = float(trkpt.attrib['lat'])
                # print(cell.latitude)
                # print(cell.latitude)
                cell.longitude = float(trkpt.attrib['lon'])
                # print(cell.longitude)
                # print(trkpt.tag)
                for ele in trkpt:
                    # if ele.tag == ''
                    # print(ele.tag)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}time':
                        cell.time = ele.text
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}speed':
                            # print(ele.text)
                        cell.speed = float(ele.text)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}ele':
                        # print(ele.text)
                        cell.elevation = float(ele.text)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}distance':
                        # print(ele.text)
                        cell.distance = float(ele.text)
                        # print(cell.distance)
                    if ele.tag == '{http://www.topografix.com/GPX/1/1}heading':
                        # print(ele.text)
                        cell.heading = int(ele.text)
                result.append(cell)               
                
    print(len(result))
    return result

if __name__ == '__main__':
    featrues = gpx_reader("./gpxfiles/2021-02-0142906.gpx")
