import axios from 'axios';

const api_url_local_base = 'http://127.0.0.1:8000/api_cloud/';
const api_url_Login = api_url_local_base+'Login';
const api_url_readActivityId = api_url_local_base+'readActivityId';
const api_url_readTrainRecord = api_url_local_base+'readTrainRecord';
const api_url_readActivity = api_url_local_base+'readActivity';
const api_url_readCloudLocusText = api_url_local_base+'readCloudLocusText';
const api_url_readCloudModule = api_url_local_base+'readCloudModule';
// const api_url_Login = 'http://skyleader3.yuansan.com/api/SkyLeader/Login';
// const api_url_readActivityId = 'http://skyleader3.yuansan.com/api/SkyLeader/readActivityId';
// const api_url_readTrainRecord = 'http://skyleader3.yuansan.com/api/SkyLeader/readTrainRecord';
// const api_url_readActivity = 'http://skyleader3.yuansan.com/api/SkyLeader/readActivity';
// const api_url_readCloudLocusText = 'http://skyleader3.yuansan.com/api/SkyLeader/readCloudLocusText';
// const api_url_readCloudModule = 'http://skyleader3.yuansan.com/api/SkyLeader/readCloudModule';

const api_options = {
    'Login':api_url_Login,
    'readActivityId':api_url_readActivityId,
    'readTrainRecord':api_url_readTrainRecord,
    'readActivity':api_url_readActivity,
    'readCloudLocusText':api_url_readCloudLocusText,
    'readCloudModule':api_url_readCloudModule,
};

async function Api_cloud_ask(option='Login',params={}){
    if(!Object.keys(api_options).includes(option))
    {
        console.log('no such option');
        return {'result':'no such option'};
    }
    var res = await axios.post(api_options[option], params);
    console.log(res);
    return res.data;
};

export default Api_cloud_ask;