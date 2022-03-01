import csv


class My_CityInfo:
    province = ''
    city = ''
    county = ''
    latitude = ''
    longitude = ''


class Csv_Reader:
    def reader(self, path):
        citys = []

        with open(path) as csvfile:
            rows = csv.reader(csvfile)

            for row in rows:
                if(len(row) < 5):
                    print("error city info")
                else:
                    # city_info = My_CityInfo()
                    # city_info.province = row[0]
                    # city_info.city = row[1]
                    # city_info.county = row[2]
                    # city_info.latitude = row[3]
                    # city_info.longitude = row[4]
                    # citys.append(city_info)

                    city_info = {}
                    city_info['province'] = row[0]
                    city_info['city'] = row[1]
                    city_info['county'] = row[2]
                    city_info['latitude'] = row[3]
                    city_info['longitude'] = row[4]
                    citys.append(city_info)
                    # print(row)
        return citys

def csvToArray(citys):
    file = open('./files_array/csv_array.txt','a+')
    for city in citys:
        file.write(str(city))
        file.write(',')
    file.close()

if __name__ == '__main__':
    csv_reader = Csv_Reader()
    citys = csv_reader.reader('./csvfiles/cn_cityname.csv')
    # for city in citys:
    #     print(city.province)
    #     print(city.city)
    #     print(city.county)
    #     print(city.latitude)
    #     print(city.longitude)
    csvToArray(citys)