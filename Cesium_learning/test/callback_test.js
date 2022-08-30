function getServerData (callback) {

    //store data into array
    let datas = [];
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener)
    oReq.open("GET", "http://127.0.0.1:443/%22")
    oReq.send()
    oReq.onreadystatechange = function () {
        if (oReq.readyState === 4) {
            callback(datas)
        }
    }

    function reqListener () {
        //to string
        var xmlString = this.responseText.toString();
        // console.log(typeof xmlString)
        //remove head '[' and tail ']'
        xmlString = xmlString.substring(1);
        xmlString = xmlString.slice(0, -1);
        // console.log(xmlString);
        // split to items by '}'
        var xmlString_split = xmlString.split('}');
        for (var i = 0; i < xmlString_split.length; i++) {
            // console.log(xmlString_split[i]);
            // console.log(xmlString_split[i].substring(1));
            //split to attributes
            //clear head
            xmlString_split[i] = xmlString_split[i].split('{')[1];
            // console.log(xmlString_split[i].length);
            if (typeof (xmlString_split[i]) == 'undefined') {
                continue;
            }
            // console.log(xmlString_split[i]);
            //split by ','
            // console.log(typeof xmlString_split[i]);
            var tmp_split = xmlString_split[i].split(',');
            var cell = {};
            for (var i_cell = 0; i_cell < tmp_split.length; i_cell++) {
                // console.log(tmp_split[i_cell]);
                switch (i_cell) {
                    case 0:
                        cell['latitude'] = tmp_split[i_cell].split(':')[1];
                        break;
                    case 1:
                        cell['longitude'] = tmp_split[i_cell].split(':')[1];
                        break;
                    case 2:
                        cell['elevation'] = tmp_split[i_cell].split(':')[1];
                        break;
                    case 3:
                        cell['time'] = tmp_split[i_cell];
                        break;
                    case 4:
                        cell['distance'] = tmp_split[i_cell].split(':')[1];
                        break;
                    case 5:
                        cell['heading'] = tmp_split[i_cell].split(':')[1];
                        break;
                    case 6:
                        cell['speed'] = tmp_split[i_cell].split(':')[1];
                        break;
                }
            }
            datas.push(cell);
        }
    }
}

getServerData (main)

function main (flightData) {
    // do ...
    console.log(flightData)
}