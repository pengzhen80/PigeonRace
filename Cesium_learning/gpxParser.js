class GpxParser {
    //params: path,filename(gpx); get parse result by GetResult(), return a js dict array;
    constructor(callback) {
        this._Init(callback);
    }
    _Init(callback) {
        function reqListener() {
            console.log("get response");
            //store data into array
            var datas = [];
            //to string
            var xmlString = this.responseText.toString();
            // console.log(xmlString)
            //remove head '[' and tail ']'
            xmlString = xmlString.substring(1);
            xmlString = xmlString.slice(0, -1);
            // console.log(xmlString);
            // split to items by '}'
            // var xmlString_split = xmlString.split('}');
            // for (var i = 0; i < xmlString_split.length; i++) {
            //     // console.log(xmlString_split[i]);
            //     // console.log(xmlString_split[i].substring(1));
            //     //split to attributes
            //     //clear head 
            //     xmlString_split[i] = xmlString_split[i].split('{')[1];
            //     // console.log(xmlString_split[i].length);
            //     if(typeof(xmlString_split[i]) == 'undefined') 
            //     {
            //         continue;
            //     }
            //     // console.log(xmlString_split[i]);
            //     //split by ','
            //     // console.log(typeof  xmlString_split[i]);
            //     var tmp_split = xmlString_split[i].split(',');
            //     var cell = {};
            //     for(var i_cell = 0;i_cell <tmp_split.length;i_cell++)
            //     {
            //         // console.log(tmp_split[i_cell]);
            //         switch(i_cell){
            //             case 0:
            //                 cell['latitude'] = Number(tmp_split[i_cell].split(':')[1]);
            //                 break;
            //             case 1:
            //                 cell['longitude'] = Number(tmp_split[i_cell].split(':')[1]);
            //                 break;
            //             case 2:
            //                 cell['elevation'] = Number(tmp_split[i_cell].split(':')[1]);
            //                 break;
            //             case 3:
            //                 // console.log(tmp_split[i_cell]);
            //                 var tmp_split_split =  tmp_split[i_cell].split(':');
            //                 cell['time'] = tmp_split_split[1]+":"+tmp_split_split[2]+":"+tmp_split_split[3];
            //                 // console.log(cell['time']);
            //                 break;
            //             case 4:
            //                 cell['distance'] = Number(tmp_split[i_cell].split(':')[1]);
            //                 // console.log(cell['distance']);
            //                 break;
            //             case 5:
            //                 cell['heading'] = Number(tmp_split[i_cell].split(':')[1]);
            //                 break;
            //             case 6:
            //                 cell['speed'] = tmp_split[i_cell].split(':')[1];
            //                 break;
            //         }
            //     }
            //     datas.push(cell);
            // }
            var xmlString_lines = xmlString.split(']');
            // console.log(xmlString_lines.length);
            // console.log(xmlString_lines[2]);
            //the last one is empty
            for (var j= 0;j< xmlString_lines.length-1;j++)
            {
                var data_line = []; 
                var xmlString_split = xmlString_lines[j].split('}');
                // console.log(xmlString_split);
                for (var i = 0; i < xmlString_split.length; i++) {
                    // console.log(xmlString_split[i]);
                    // console.log(xmlString_split[i].substring(1));
                    //split to attributes
                    //clear head 
                    xmlString_split[i] = xmlString_split[i].split('{')[1];
                    // console.log(xmlString_split[i].length);
                    if(typeof(xmlString_split[i]) == 'undefined') 
                    {
                        continue;
                    }
                    // console.log(xmlString_split[i]);
                    //split by ','
                    // console.log(typeof  xmlString_split[i]);
                    var tmp_split = xmlString_split[i].split(',');
                    var cell = {};
                    for(var i_cell = 0;i_cell <tmp_split.length;i_cell++)
                    {
                        // console.log(tmp_split[i_cell]);
                        switch(i_cell){
                            case 0:
                                cell['latitude'] = Number(tmp_split[i_cell].split(':')[1]);
                                break;
                            case 1:
                                cell['longitude'] = Number(tmp_split[i_cell].split(':')[1]);
                                break;
                            case 2:
                                cell['elevation'] = Number(tmp_split[i_cell].split(':')[1]);
                                break;
                            case 3:
                                // console.log(tmp_split[i_cell]);
                                var tmp_split_split =  tmp_split[i_cell].split(':');
                                cell['time'] = tmp_split_split[1]+":"+tmp_split_split[2]+":"+tmp_split_split[3];
                                // console.log(cell['time']);
                                break;
                            case 4:
                                cell['distance'] = Number(tmp_split[i_cell].split(':')[1]);
                                // console.log(cell['distance']);
                                break;
                            case 5:
                                cell['heading'] = Number(tmp_split[i_cell].split(':')[1]);
                                break;
                            case 6:
                                cell['speed'] = tmp_split[i_cell].split(':')[1];
                                break;
                        }
                    }
                    data_line.push(cell);
                }
                datas.push(data_line);
            }
           

            // for(var i=0;i<datas.length;i++)
            // {
            //     console.log(datas[i].latitude);
            // }
            console.log(datas.length);
            this._result = datas;
            callback(datas);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener)
        oReq.open("GET", "http://127.0.0.1:4443");
        oReq.send();

    }
}

// let _APP = null;

// window.addEventListener('DOMContentLoaded', () => {
//     _APP = new GpxParser();
// });