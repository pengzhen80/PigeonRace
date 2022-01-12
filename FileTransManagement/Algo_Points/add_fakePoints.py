from typing import Tuple


class FakePoint:
    def __init__(self,from_latitude,from_longitude,from_elevation,from_heading,to_latitude,to_longitude,to_elevation,to_heading):
        self.from_latitude = from_latitude
        self.from_longitude = from_longitude
        self.from_elevation = from_elevation
        self.from_heading = from_heading
        self.to_latitude = to_latitude
        self.to_longitude = to_longitude
        self.to_elevation = to_elevation
        self.to_heading = to_heading
    ### step1: add start point and set flag True
    ### step2: add fake points and set flags False
    ### step3: add end point and set flag True
    def add_fakePoints(self,number):
        points = []
        point_head = {}
        point_head['latitude'] = self.from_latitude
        point_head['longitude'] = self.from_longitude
        point_head['elevation'] = self.from_elevation
        point_head['heading'] = self.from_heading
        point_head['flag'] = True
        points.append(point_head)
        
        seg_lat = (self.to_latitude - self.from_latitude)/number
        seg_lon = (self.to_longitude - self.from_longitude)/number
        seg_ele = (self.to_elevation - self.from_elevation)/number
        for i in range(1,number-1):
            point = {}
            point['latitude'] = self.from_latitude+seg_lat*i
            point['longitude'] = self.from_longitude+seg_lon*i
            point['elevation'] = self.from_elevation+seg_ele*i
            point['heading'] = self.from_heading
            point['flag'] = False
            points.append(point)
        point_end = {}
        point_end['latitude'] = self.to_latitude
        point_end['longitude'] = self.to_longitude
        point_end['elevation'] = self.to_elevation
        point_end['heading'] = self.to_heading
        point_end['flag'] = True
        points.append(point_end)
        
        return points