
let map_handler = null;
map_init();
//用來讀取file資料的FileReader
var fileReader = new FileReader();
var fileUploader = document.getElementById("customFile");
//監控#fileUploader的值變化
fileUploader.addEventListener("change", function (event) {
    if (this.files.length > 0) {
        //有選取file時，使用fileReader讀取file資料
        // console.log(fileReader.readAsText(this.files[0]));
        //讀取完成後，將資料轉成text
        console.log(this.files.length);
        readmultifiles(this.files)
    } else {
        //沒有選取file時，例如選擇取消，
        //將<img>的src設成""
    }
}, false);

function readmultifiles(files) {
    var gpxFileDatas = [];

    function readFile(index) {
        //when all files loaded , start to decode datas
        if (index >= files.length) {
            var filtered_gpxFileDatas = [];
            console.log(gpxFileDatas);
            for (var index_gpxData = 0; index_gpxData < gpxFileDatas.length; index_gpxData++) {
                    filtered_gpxFileDatas.push(gpxFileDatas[index_gpxData]);
            }

            var paths = decodePath(filtered_gpxFileDatas);
            console.log(paths.length);
            showInMap_multi_init(paths);
            func_solo_route_SpeedElevation(paths[0]);
            // func_sendRequest_makePolygonByOldCalculater(pathManger.GetOringinalPathsByPathNames(newPathNames));
            // console.log(gpxFileDatas);
            // pathManger.decodePath(gpxFileDatas);
            // func_sendRequest_makePolygonByOldCalculater(pathManger.GetOringinalPaths());
            return;
        }
        

        // store file name and file content to gpxFileDatas
        var gpxFileDatas_ele = {};
        /// path name init from file name
        gpxFileDatas_ele['name'] = files[index].name.split('.')[0];
        // /// add path name to pathNameList
        // var opt = document.createElement('option');
        // opt.value = gpxFileDatas_ele['name'];
        // opt.innerHTML = gpxFileDatas_ele['name'];
        // pathNameList.appendChild(opt);

        // fileList.innerHTML += "<br>" + files[index].name.split('.')[0] + "</br>";

        var file = files[index];
        fileReader.onload = function (e) {
            // get file content  
            var data = e.target.result;
            // console.log(data);
            gpxFileDatas_ele['data'] = data;
            gpxFileDatas.push(gpxFileDatas_ele);
            // do sth with bin
            readFile(index + 1)
        }
        fileReader.readAsText(file);
    }
    readFile(0);
}

function decodePath(paths) {
    //decode path to polygon
    // console.log(paths[0]['data']);
    var parser = new DOMParser();
    var originalPaths = [];
    for (var index = 0; index < paths.length; index++) {
        var xmlDoc = parser.parseFromString(paths[index]['data'], 'text/xml');
        // console.log(xmlDoc.getElementsByTagName("title"));
        // console.log(xmlDoc.getElementsByTagName("trkpt"));
        var points = [];
        var trkpts = xmlDoc.getElementsByTagName("trkpt");
        for (var i = 0; i < trkpts.length; i++) {
            // console.log(trkpts[i]);
            var cell = {};
            var lat = trkpts[i].getAttribute("lat");
            var lon = trkpts[i].getAttribute("lon");
            cell['lat'] = lat;
            cell['lon'] = lon;
            

            var fix = trkpts[i].getElementsByTagName('fix');
            var time = trkpts[i].getElementsByTagName('time');
            var ele = trkpts[i].getElementsByTagName('ele');
            var speed = trkpts[i].getElementsByTagName('speed');
            var heading = trkpts[i].getElementsByTagName('heading');
            var distance = trkpts[i].getElementsByTagName('distance');
            var hdop = trkpts[i].getElementsByTagName('hdop');
            var sat = trkpts[i].getElementsByTagName('sat');
            // console.log(attributes[0].innerHTML);
            cell['fix'] = fix[0].innerHTML;
            cell['time'] = time[0].innerHTML;
            cell['ele'] = ele[0].innerHTML;
            cell['speed'] = speed[0].innerHTML;
            cell['heading'] = heading[0].innerHTML;
            cell['distance'] = distance[0].innerHTML;
            cell['hdop'] = hdop[0].innerHTML;
            cell['sat'] = sat[0].innerHTML;

            points.push(cell);
        }
        // originalPaths.push({ name: paths[index]['name'], data: path });
        originalPaths.push(points);
    }
    console.log(originalPaths[0].length);
    return originalPaths;
}

function map_init()
{
    map_handler = L.map('map_showroutes', { preferCanvas: true }).setView([0, 0], 8);
    // var tile_openstreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //         maxZoom: 20,
    //         // attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // }).addTo(map_handler);
    var roadMutant = L.gridLayer
            .googleMutant({
                maxZoom: 24,
                type: "roadmap",
            })
            .addTo(map_handler);

        var terrainMutant = L.gridLayer.googleMutant({
            maxZoom: 24,
            type: "terrain",
        });

        var hybridMutant = L.gridLayer.googleMutant({
            maxZoom: 24,
            type: "hybrid",
        });

        var grid = L.gridLayer({
            // attribution: "Debug tilecoord grid",
        });

        L.control
            .layers(
                {
                    Roadmap: roadMutant,
                    Terrain: terrainMutant,
                    Hybrid: hybridMutant,
                },
                {
                    // "markers": markers,
                    // grid,
                },
                {
                    collapsed: false,
                }
            )
            .addTo(map_handler);
}

function showInMap_multi_init(paths) {

            var path_normalize_list = [];
            for( var i=0;i<paths.length;i++)
            {
                var path = paths[i];
                var path_normalize=[];
                for (var j = 0; j < path.length; j++) {
                    var cell = [];
                    cell.push(parseFloat(path[j]['lat']));
                    cell.push(parseFloat(path[j]['lon']));
                    path_normalize.push(cell);
                }
                path_normalize_list.push(path_normalize);
            }

            console.log(path_normalize_list);

            map_handler.setView(path_normalize_list[0][0], 10);

            var color_list_routes = [];
            for(var i=0;i<path_normalize_list.length;i++)
            {
                var color  = getRandomColor();
                color_list_routes.push(color);
                // var lineObject = drawPath(path_normalize_list[i],'red','3');
                var  lineObject= drawPath(path_normalize_list[i],color,'3');
                var line_group = L.layerGroup()
                    .addLayer(lineObject)
                    .addTo(map_handler);              
                // markersObjects_in_Map_showPaths.concat(markers);
            }
            
            function drawPath(pathLine_origin,color,weight) {
                console.log(typeof (pathLine_origin));
                // console.log(pathLine_origin);
                var pathLine_origin_normalized = pathLine_origin;
                // console.log(typeof (pathLine_origin_normalized));
                // console.log(pathLine_origin_normalized);

                // var polyline_origin = L.polyline(pathLine_origin_normalized, { color: color, weight: weight }).addTo(map_handler);
                var polyline_origin = L.polyline(pathLine_origin_normalized, { color: color, weight: weight });
                var polyline_origin_straight = L.polyline([pathLine_origin_normalized[0],pathLine_origin_normalized[pathLine_origin_normalized.length-1]], { color: 'red', weight: weight }).addTo(map_handler);
                
                return polyline_origin;
            }

            function drawMarkers(pathLine_origin,color,originDatas) {
                var Markers = [];
                for(var i=0;i<pathLine_origin.length;i++)
                {
                    // console.log(originDatas[i]);
                    var time = originDatas[i]['time'];
                    var speed = originDatas[i]['speed'];
                    var heading = originDatas[i]['heading'];
                    var elevation = originDatas[i]['elevation'];
                    var text = "<br>"+"time : "+time.toString()
                    +"<br>"+"speed : "+speed.toString()
                    +"<br>"+"heading : "+heading.toString()
                    +"<br>"+"elevation : "+elevation.toString();
                    // console.log(text);
                    Markers.push(L.marker(pathLine_origin[i],{opacity:0.5}).bindPopup(text).addTo(map_handler));
                }
                return Markers;
            }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 每小時分速排名：
// step1 : 計算時間長度，切割成0,1,...，最後時間；
// step2：根據公式進行結果計算；
// step3：繪製折線圖；

// 投影算法：
// 直線距離 ： D（當前點，起始點），D（當前點，baseline），勾股定理，D（投影）；
// 正負號： 當前點，起點，終點  的夾角>90的話，那摩就是 負的； 
///functions for solo route's figures analysis
function func_solo_route_SpeedElevation(demo_singleRoute) {
            var data_normalized = []
            var time_list = [];

            for (var i = 0; i < demo_singleRoute.length; i++) {
                data_normalized.push([demo_singleRoute[i]['lat'], demo_singleRoute[i]['lon']]);
                time_list.push(demo_singleRoute[i]['time']);
            }

            var [makeData_XTimeStamp,makeData_points] = makeXTimeSlice();
            function makeXTimeSlice()
            {
                var result_TimeStamp = [];
                var result_points = [];
                var data_time_list = [];
                for(var i=0;i<time_list.length;i++)
                {
                    data_time_list.push(new Date(time_list[i]));
                }
                //find out time stamp
                var startDate = data_time_list[0];
                result_TimeStamp.push(time_list[0]);
                result_points.push(demo_singleRoute[0]);
                for(var i=1;i<data_time_list.length;i++)
                {
                    var curTime = data_time_list[i];
                    var interval = curTime.getTime() - startDate.getTime();
                    if(interval >= 1000)
                    {
                        result_TimeStamp.push(time_list[i]);
                        result_points.push(demo_singleRoute[i]);
                        startDate = curTime;
                    }
                    // if(interval >= 5*60*1000)
                    // {
                    //     result_TimeStamp.push(time_list[i]);
                    //     result_points.push(demo_singleRoute[i]);
                    //     startDate = curTime;
                    // }
                }
                result_TimeStamp.push(time_list[time_list.length-1]);
                result_points.push(demo_singleRoute[demo_singleRoute.length-1]);
                console.log(result_TimeStamp.length);
                return [result_TimeStamp,result_points];
            }


            // 投影算法：
            // 直線距離 ： D（當前點，起始點），D（當前點，baseline），勾股定理，D（投影）；
            // 正負號： 當前點，起點，終點  的夾角>90的話，那摩就是 負的；
            // 由於 point to line 的算法不好用：計算不出結果；所以改爲使用cos：
            // D（投影） = D（當前點，起始點）* cos（當前點，起點，終點）； 
            console.log(makeData_XTimeStamp.length);
            var projectionDistances_list = makeData_ProjectionDistance(makeData_XTimeStamp,makeData_points);
            function makeData_ProjectionDistance(timestamps,points)
            {
                var result_projectionDistances = [];
                var startPoint = [points[0]['lon'],points[0]['lat']];
                var endPoint = [points[points.length-1]['lon'],points[points.length-1]['lat']];
                var from = turf.point(startPoint);
                var to = turf.point(endPoint);
                var options = {units: 'kilometers'};
                var straightdistance = turf.distance(from, to, options);
                var baseline = turf.lineString([startPoint,endPoint]);
                for(var i=0;i<timestamps.length;i++)
                {
                    var curpoint = turf.point([points[i]['lon'], points[i]['lat']]);
                    var options = {units: 'kilometers'};
                    var distanceToStart = turf.distance(curpoint, startPoint, options);
                    var angle = turf.angle([points[i]['lon'], points[i]['lat']], startPoint, endPoint);
                    var angle_radians = turf.degreesToRadians(angle);
                    var distanceProjection = distanceToStart * Math.cos(angle_radians);
                    // console.log(angle,angle_pi,Math.cos(angle_radians));
                    // console.log(timestamps[i],distanceToStart, angle,angle_radians,Math.cos(angle_radians),distanceProjection);
                    if(angle > 90)
                    {
                        distanceProjection = -distanceProjection;
                    }
                    // console.log(straightdistance,distanceProjection);
                    // result_projectionDistances.push((straightdistance - distanceProjection).toFixed(3));
                    result_projectionDistances.push(distanceProjection.toFixed(3));
                }
                console.log(result_projectionDistances);
                return result_projectionDistances;
            }

            //             總距離 = Distance（起點，終點），
            // 剩餘距離 = Distance（當前點，終點），
            // 即時直線分速=（總距離-剩餘距離）/時間，
            // 即時路徑效率 = （總距離-剩餘距離）/實際飛行距離，
            var leftDistance_list = makeData_LeftDistance(makeData_XTimeStamp,makeData_points);
            function makeData_LeftDistance(timestamps,points)
            {
                var result_leftDistances = [];
                var startPoint = [points[0]['lon'],points[0]['lat']];
                var endPoint = [points[points.length-1]['lon'],points[points.length-1]['lat']];
                var from = turf.point(startPoint);
                var to = turf.point(endPoint);
                var options = {units: 'kilometers'};
                var straightdistance = turf.distance(from, to, options);
                var baseline = turf.lineString([startPoint,endPoint]);
                for(var i=0;i<timestamps.length;i++)
                {
                    var curpoint = turf.point([points[i]['lon'], points[i]['lat']]);
                    var options = {units: 'kilometers'};
                    var distanceToEnd = turf.distance(curpoint, endPoint, options);
                    result_leftDistances.push((straightdistance-distanceToEnd).toFixed(3));
                }
                console.log(result_leftDistances);
                return result_leftDistances;
            }

            var diff = make_diff();
            function make_diff()
            {
                var result_diff = [];
                for(var i=0;i<projectionDistances_list.length;i++)
                {
                    result_diff.push((projectionDistances_list[i]-leftDistance_list[i]).toFixed(3));
                }
                return result_diff;
            }

            //set options
            var options = {
                series: [
                    {
                        name: '投影距離(km)',
                        data: projectionDistances_list,
                    },
                    {
                        name: '總距離-剩餘距離(km)',
                        data: leftDistance_list,
                    },
                    // {
                    //     name: '距離差異(km)',
                    //     data: diff,
                    // },
                ],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    events: {
                      mouseMove: function (event, chartContext, config) {
                          try {
                                // console.log(demo_singleRoute[config['dataPointIndex']]);
                                showInMap_movepoint( makeData_points[config['dataPointIndex']]);
                          } catch (e) {
                              console.log(e); // Error: hi
                          }
                      },
                      click: function(event, chartContext, config) {
                      // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
                        try {
                              var index = config['dataPointIndex'];
                              func_filterCard_setPositon(routes_origin[chart_canvas_speed_elevation_forFilterRoutes_curRouteIndex][index]['time']);
                            } catch (e) {
                                console.log(e); // Error: hi
                            }
                    }
                  },
                },
                colors: ['#77B6EA', '#545454', '#7CFC00', '#b84644', '#4576b5'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: '投影距離，總距離-剩餘距離，對比圖',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                },
                xaxis: {
                    type: 'category',
                    categories: makeData_XTimeStamp,
                }
            };
            var chart_projection = document.getElementById('chart_projection')
            var chart_canvas_speed_elevation_forFilterRoutes = new ApexCharts(chart_projection, options);
            chart_canvas_speed_elevation_forFilterRoutes.render();    
}

let markerForSpeedPlot = null;
function showInMap_movepoint(point) {
        
    map_handler.setView([point['lat'],point['lon']]);
    // var time = point['time'];
    // var speed = point['speed'];
    // var heading = point['heading'];
    // var elevation = point['ele'];
    // var text = "<br>"+"time : "+time.toString()
    //             +"<br>"+"speed : "+speed.toString()
    //             +"<br>"+"heading : "+heading.toString()
    //             +"<br>"+"elevation : "+elevation.toString();

    if(markerForSpeedPlot)
    {
        markerForSpeedPlot.setLatLng(L.latLng(point['lat'], point['lon']));
        // markerForSpeedPlot.bindPopup(text);
    }
    else
    {
        markerForSpeedPlot = L.marker([point['lat'],point['lon']]).addTo(map_handler);
    }
        
}