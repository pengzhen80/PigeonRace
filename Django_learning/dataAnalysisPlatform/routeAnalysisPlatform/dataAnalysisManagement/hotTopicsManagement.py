import copy
class HotTopicsManagement:
    def __init__(self):
        pass
    
    # def init_routeSummary(self,routeSummarys,localFilteredRecords):
    #     keys = routeSummarys.keys()
    #     dict_pigeonNumber_recordId = {}
    #     for key in keys:
    #         pigeonNumber = routeSummarys[key]['recordname']
    #         if pigeonNumber in dict_pigeonNumber_recordId.keys():
    #             dict_pigeonNumber_recordId[pigeonNumber].append(key)
    #         else:
    #             dict_pigeonNumber_recordId[pigeonNumber] = [key]
        
    #     ### pigeonNumber,totalRealDistance,averageRealSpeed,totalStraightDistance,averageStraightSpeed,averageRouteEfficiency
    #     print(localFilteredRecords)
    #     list_pigeonNumber_summaryData =  []
    #     keys = dict_pigeonNumber_recordId.keys()
    #     for key in keys:
    #         totalRealDistance = 0
    #         totalStraightDistance = 0
    #         totalTime  = 0
    #         for record in localFilteredRecords:
    #             if(record[0] in dict_pigeonNumber_recordId[key]):
    #                 totalRealDistance += record[4]
    #                 totalStraightDistance += record[6]
    #                 totalTime += record[4]/record[5]
    #         if(totalTime == 0):
    #             continue
    #         averageRealSpeed = totalRealDistance/totalTime
    #         averageStraightSpeed = totalStraightDistance/totalTime
    #         totalRouteEfficiency = totalStraightDistance/totalRealDistance
    #         list_pigeonNumber_summaryData.append({'pigeonNumber':key,'totalRealDistance':totalRealDistance,'averageRealSpeed':averageRealSpeed,'totalStraightDistance':totalStraightDistance,'averageStraightSpeed':averageStraightSpeed,'totalRouteEfficiency':totalRouteEfficiency})
        
    #     rankStraightSpeed,rankRouteEfficiency = self.rankingBoard(list_pigeonNumber_summaryData)
    #     pigeon_toTrain = self.pigeon_specialPigeons(list_pigeonNumber_summaryData)
    #     return rankStraightSpeed,rankRouteEfficiency,pigeon_toTrain

    def init_routeSummary(self,routeSummarys,localFilteredRecords):
        keys = routeSummarys.keys()
        dict_pigeonNumber_recordId = {}
        for key in keys:
            pigeonNumber = routeSummarys[key]['recordname']
            if pigeonNumber in dict_pigeonNumber_recordId.keys():
                dict_pigeonNumber_recordId[pigeonNumber].append(key)
            else:
                dict_pigeonNumber_recordId[pigeonNumber] = [key]
        
        ### pigeonNumber,totalRealDistance,averageRealSpeed,totalStraightDistance,averageStraightSpeed,averageRouteEfficiency
        # print(localFilteredRecords)
        list_pigeonNumber_summaryData =  []
        keys = dict_pigeonNumber_recordId.keys()
        for key in keys:
            totalRealDistance = 0
            totalStraightDistance = 0
            totalTime  = 0
            for record in localFilteredRecords:
                if(record[0] in dict_pigeonNumber_recordId[key]):
                    totalRealDistance += float(record[4])
                    totalStraightDistance += float(record[6])
                    totalTime += float(record[4])/float(record[5])
            if(totalTime == 0):
                continue
            averageRealSpeed = totalRealDistance/totalTime
            averageStraightSpeed = totalStraightDistance/totalTime
            totalRouteEfficiency = totalStraightDistance/totalRealDistance
            list_pigeonNumber_summaryData.append({'pigeonNumber':key,'totalRealDistance':totalRealDistance,'averageRealSpeed':averageRealSpeed,'totalStraightDistance':totalStraightDistance,'averageStraightSpeed':averageStraightSpeed,'totalRouteEfficiency':totalRouteEfficiency})
        
        rankStraightSpeed,rankRouteEfficiency = self.rankingBoard(list_pigeonNumber_summaryData)
        pigeon_toTrain = self.pigeon_specialPigeons(list_pigeonNumber_summaryData)
        return rankStraightSpeed,rankRouteEfficiency,pigeon_toTrain
        
    def rankingBoard(self,track_summary):
        rank_straightSpeed = copy.deepcopy(track_summary)

        for i in range(len(rank_straightSpeed)):
            for j in range(i+1,len(rank_straightSpeed)):
                if rank_straightSpeed[i]['averageStraightSpeed']<rank_straightSpeed[j]['averageStraightSpeed']:
                    tmp = copy.deepcopy(rank_straightSpeed[i])
                    rank_straightSpeed[i] = copy.deepcopy(rank_straightSpeed[j])
                    rank_straightSpeed[j] = tmp

        rank_routeEfficiency = copy.deepcopy(track_summary)
        
        for i in range(len(rank_routeEfficiency)):
            for j in range(i+1,len(rank_routeEfficiency)):
                if rank_routeEfficiency[i]['totalRouteEfficiency']<rank_routeEfficiency[j]['totalRouteEfficiency']:
                    tmp = copy.deepcopy(rank_routeEfficiency[i])
                    rank_routeEfficiency[i] = copy.deepcopy(rank_routeEfficiency[j])
                    rank_routeEfficiency[j] = tmp
        
        # print(rank_straightSpeed,rank_routeEfficiency)
        return rank_straightSpeed,rank_routeEfficiency

    def pigeon_specialPigeons(self,track_summary):
        if(len(track_summary)<1):
            return None
        pigeon_toTrain =  track_summary[0]['pigeonNumber']
        fastSpeed = track_summary[0]['averageRealSpeed']
        for i in range(1,len(track_summary)):
                if fastSpeed<track_summary[i]['averageRealSpeed']:
                    fastSpeed = track_summary[i]['averageRealSpeed']
                    pigeon_toTrain = track_summary[i]['pigeonNumber']

        return pigeon_toTrain



if __name__ == '__main__':
    hotTopicsManager = HotTopicsManagement()