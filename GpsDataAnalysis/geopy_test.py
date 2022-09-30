from geopy import distance
newport_ri = (24.000280380249023, 120.47113037109375)
cleveland_oh = (24.22879409790039, 120.6884994506836)
print(distance.distance(newport_ri, cleveland_oh).km)

# wellington = (-41.32, 174.81)
# salamanca = (40.96, -5.50)
# print(distance.distance(wellington, salamanca).km)
# 19959.6792674