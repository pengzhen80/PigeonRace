class ApiManagement {
    constructor() {
        this.baseUrl = 'http://skyleader3.yuansan.com/';
    }

    checkApi() {
        const url = this.baseUrl + 'api/SkyLeader/checkAPI';
        var oReq = new XMLHttpRequest();

        function reqListener() {
            console.log(typeof (this.responseText), typeof (this.response));
            console.log(this.responseText);
        }

        console.log('check api', url);
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", url, true);
        // oReq.setRequestHeader("X-CSRFToken", '{{ csrf_token|safe }}');
        oReq.setRequestHeader("Accept", "application/json");
        // oReq.setRequestHeader("Content-Type", "application/json");
        oReq.send();
        // oReq.setRequestHeader("X-CSRFToken", '{{ csrf_token|safe }}');
        // oReq.setRequestHeader("Accept", "application/json");
        // oReq.setRequestHeader("Content-Type", "application/json");
        // oReq.send(JSON.stringify({ "locations": dataToSend_json }));
    }

    // logIn() {
    //     const url = this.baseUrl + 'api/SkyLeader/Login';
    //     var oReq = new XMLHttpRequest();
    //     var option = {
    //         "account": "pengzhenguo2021@gmail.com",
    //         "password": "www1339"
    //     }

    //     function reqListener() {
    //         console.log(typeof (this.responseText), typeof (this.response));
    //         console.log(this.responseText);

    //         // var response = JSON.parse(this.responseText);
    //         // console.log(response.results);
    //     }

    //     console.log('log in', url);
    //     oReq.addEventListener("load", reqListener);
    //     oReq.open("post", url);
    //     // oReq.setRequestHeader("X-CSRFToken", '{{ csrf_token|safe }}');
    //     oReq.setRequestHeader("Accept", "application/json");
    //     oReq.setRequestHeader("Content-Type", "application/json");
    //     // console.log(oReq);
    //     // oReq.setRequestHeader("HTTP/1.1 200 OK");
    //     oReq.send(JSON.stringify(option));
    //     // oReq.send(option);
    // }

    logIn() {
        const url = this.baseUrl + 'api/SkyLeader/Login';
        var oReq = new XMLHttpRequest();
        var option = {
            "account": "pengzhenguo2021@gmail.com",
            "password": "www1339"
        }
        var data = new FormData();
        data.append('account', 'pengzhenguo2021@gmail.com');
        data.append('password','www1339');

        function reqListener() {
            console.log(typeof (this.responseText), typeof (this.response));
            console.log(this.responseText);

            // var response = JSON.parse(this.responseText);
            // console.log(response.results);
        }

        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }

        fetch(url, {
            method: "POST",
            headers: headers,
            // mode: 'no-cors',
            body: data
        }).then(response => response.json()).then(json => console.log(json));
    }

    getActivityId() {
        const url = this.baseUrl + 'api/SkyLeader/readActivityId';
        var oReq = new XMLHttpRequest();
        var option = {
            "mxid": "ebe40ef419dd47e1a63f8730ccf604f0",
            "release_date": "string",
            "release_time": "string"
        }

        function reqListener() {
            console.log(typeof (this.responseText), typeof (this.response));
            console.log(this.responseText);

            // var response = JSON.parse(this.responseText);
            // console.log(response.results);
        }

        console.log('log in', url);
        oReq.addEventListener("load", reqListener);
        oReq.open("post", url);
        // oReq.setRequestHeader("X-CSRFToken", '{{ csrf_token|safe }}');
        oReq.setRequestHeader("Accept", "application/json");
        oReq.setRequestHeader("Content-Type", "application/json");
        // console.log(oReq);
        // oReq.setRequestHeader("HTTP/1.1 200 OK");
        oReq.send(JSON.stringify(option));
        // oReq.send(option);
    }
}

const apiManager = new ApiManagement();
apiManager.checkApi();
apiManager.logIn();