from gpxpy.geo import distance
from pykml.factory import nsmap
from pykml.factory import KML_ElementMaker as KML
from pykml.factory import GX_ElementMaker as GX
from pykml.parser import Schema
from lxml import etree


# from gpx_management import gpx_reader
# from gpx_management import MyTransParams
from gpx_test import gpx_reader
from gpx_test import MyTransParams

def kml_maker(features):
    print(len(features))
    gxns = '{' + nsmap['gx'] + '}'
    feature_list = []
    count_feature = 0
    for feature in features:
        if feature['flag'] == True :
            count_feature += 1
        tmp_feature = {}
        tmp_feature['lon'] = feature['longitude']
        tmp_feature['lat'] = feature['latitude']
        tmp_feature['ele'] = feature['elevation']
        # tmp_feature['range'] = max_elevation - feature['elevation']
        tmp_feature['range'] = 0
        tmp_feature['tilt'] = 45
        tmp_feature['heading'] = feature['heading']
        # tmp_feature['heading'] = 225
        tmp_feature['name'] = 'p'+str(count_feature)
        tmp_feature['desc'] = 'test'
        tmp_feature['flag'] = feature['flag']
        # tmp_feature['distance'] = feature.distance
        
        feature_list.append(tmp_feature)
    
    # start with a base KML tour and playlist
    tour_doc = KML.kml(
        KML.Document(
        GX.Tour(
            KML.name("Play me!"),
            GX.Playlist(),
        ),
        KML.Folder(
            KML.name('Features'),
            id='features',
        ),
        )
    )
    for feature in feature_list:
        #import ipdb; ipdb.set_trace()
        # fly to a space viewpoint
        
        
        # tour_doc.Document[gxns+"Tour"].Playlist.append(
        # GX.FlyTo(
        # GX.duration(0.5),
        # GX.flyToMode("smooth"),
        #     KML.LookAt(
        #     KML.longitude(feature['lon']),
        #     KML.latitude(feature['lat']),
        #     KML.altitude(0),
        #     KML.heading(0),
        #     KML.tilt(0),
        #     KML.range(feature['range']),
        #     KML.altitudeMode("relativeToGround"),
        #     )
        # ),
        # )
        
        
        # fly to the feature
        #set duration
        tmp_duration = 0.1
        if feature['flag'] == True:
            tmp_duration = 1
        tour_doc.Document[gxns+"Tour"].Playlist.append(
        GX.FlyTo(               
            GX.duration(tmp_duration),
            GX.flyToMode("smooth"),
            KML.LookAt(
            KML.longitude(feature['lon']),
            KML.latitude(feature['lat']),
            KML.altitude(feature['ele']),
            KML.heading(feature['heading']),
            KML.tilt(feature['tilt']),
            KML.range(feature['range']),
            KML.altitudeMode("relativeToGround"),
            )
        ),
        )
        # # spin around the feature
        # for aspect in range(0,360,10):
        #     tour_doc.Document[gxns+"Tour"].Playlist.append(
        #     GX.FlyTo(
        #         GX.duration(0.25),
        #         GX.flyToMode("smooth"),
        #         KML.LookAt(
        #         KML.longitude(feature['lon']),
        #         KML.latitude(feature['lat']),
        #         KML.altitude(0),
        #         KML.heading(aspect),
        #         KML.tilt(feature['tilt']),
        #         KML.range(feature['range']),
        #         KML.altitudeMode("relativeToGround"),
        #         )
        #     )
        #     )
        # tour_doc.Document[gxns+"Tour"].Playlist.append(GX.Wait(GX.duration(1.0)))
    
#    tour_doc.Document[gxns+"Tour"].Playlist.append(
#        GX.TourControl(GX.playMode("pause"))
#    )
    
        # # add a placemark for the feature
        if feature['flag'] == True :
            tour_doc.Document.Folder.append(
            KML.Placemark(
                KML.name(feature['name']),
                KML.description(
                    "<h1>{name}</h1><br/>{desc}".format(
                            name=feature['name'],
                            desc=feature['desc'],
                    )
                ),
                KML.Point(
                KML.extrude(1),
                KML.altitudeMode("relativeToGround"),
                KML.coordinates("{lon},{lat},{alt}".format(
                        lon=feature['lon'],
                        lat=feature['lat'],
                        alt=50,
                    )
                )
                ),
                id=feature['name'].replace(' ','_')
            )
            )
        # # show the placemark balloon
        # tour_doc.Document[gxns+"Tour"].Playlist.append(
        #     GX.AnimatedUpdate(
        #     GX.duration(0.1),
        #     KML.Update(
        #         KML.targetHref(),
        #         KML.Change(
        #         KML.Placemark(
        #             KML.visibility(1),
        #             GX.balloonVisibility(1),
        #             targetId=feature['name'].replace(' ','_')
        #         )
        #         )
        #     )
        #     )
        # )
    
        # tour_doc.Document[gxns+"Tour"].Playlist.append(GX.Wait(GX.duration(2.0)))
        
        # tour_doc.Document[gxns+"Tour"].Playlist.append(
        #     GX.AnimatedUpdate(
        #         GX.duration(0.1),
        #         KML.Update(
        #             KML.targetHref(),
        #             KML.Change(
        #             KML.Placemark(
        #                 GX.balloonVisibility(0),
        #                 targetId=feature['name'].replace(' ','_')
        #             )
        #             )
        #         )
        #     )
        # )
        
        
        # # fly to a space viewpoint
        # tour_doc.Document[gxns+"Tour"].Playlist.append(
        #     GX.FlyTo(
        #         GX.duration(5),
        #         GX.flyToMode("bounce"),
        #         KML.LookAt(
        #         KML.longitude(feature['lon']),
        #         KML.latitude(feature['lat']),
        #         KML.altitude(0),
        #         KML.heading(0),
        #         KML.tilt(0),
        #         KML.range(10000000.0),
        #         KML.altitudeMode("relativeToGround"),
        #         )
        #     ),
        # )
    # check that the KML document is valid using the Google Extension XML Schema
    assert(Schema("kml22gx.xsd").validate(tour_doc))

    # print(etree.tostring(tour_doc, pretty_print=True))

    import codecs
    # output a KML file (named based on the Python script)
    outfile = open(__file__.rstrip('.py')+'.kml','w')
    fw_bytes = etree.tostring(tour_doc, pretty_print=True)
    fw_str = codecs.decode(fw_bytes)
    outfile.write(fw_str)

# from algorithm import FakePoint
from Algo_Points.add_fakePoints import *
def make_fake_features(features):
    result = []
    len_features = len(features)
    if len_features<2:
        return features
    for i in range(0,len_features-1):
        if(i<len_features-2):
            if(features[i].distance>1000):
                fakepoint_maker = FakePoint(features[i].latitude,features[i].longitude,features[i].elevation,features[i].heading,features[i+1].latitude,
                                        features[i+1].longitude,features[i+1].elevation,features[i+1].heading)
                number = int(features[i].distance / 50)
                result.extend(fakepoint_maker.add_fakePoints(number))
            else:
                
                point_true = {}
                point_true['latitude'] = features[i].latitude
                point_true['longitude'] = features[i].longitude
                point_true['elevation'] = features[i].elevation
                point_true['heading'] = features[i].heading               
                point_true['flag'] = True
                result.append(point_true)    
        else:
            point_true = {}
            point_true['latitude'] = features[i].latitude
            point_true['longitude'] = features[i].longitude
            point_true['elevation'] = features[i].elevation
            point_true['heading'] = features[i].heading  
            point_true['flag'] = True
            result.append(point_true) 
    return result    

# def max_elevation(features):
#     result = features[0]['elevation']
#     for feature in features:
#         if feature['elevation'] > result:
#             result = feature['elevation']
#     return result   
import gpx_test
if __name__ == '__main__':
    features = gpx_reader("./gpxfiles/2021-02-0142906.gpx")
    old_features = gpx_test.gpx_reader("./gpxfiles/2021-02-0142906.gpx")
    for i in range(0,len(old_features)-1):
        features[i].distance = old_features[i].distance
    featuresWithFake = make_fake_features(features)
    kml_maker(featuresWithFake)