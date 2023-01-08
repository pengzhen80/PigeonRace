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

//models
export let ApiCloud_StaticParams_mxid = '';
export let ApiCloud_StaticParams_acvitityID = [];
export let ApiCloud_StaticParams_acvitity = [];
export let ApiCloud_StaticParams_module = [];
export let ApiCloud_StaticParams_trianRecord = [];
export let ApiCloud_StaticParams_locusText = [];


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
    if(option == 'Login')
    {
      ApiCloud_StaticParams_mxid = res.data['mxid'];
      Api_cloud_ask_activityID();
    }
    return res.data;
};

function Api_cloud_ask_activityID()
{
  var res =  axios.post(api_options['readActivityId'], {'mxid':ApiCloud_StaticParams_mxid}).
  then((res) => {
    for(var i=0;i<res.data.length;i++)
    {
      var acvitity = res.data[i];
      var activity_id = acvitity['activity_id'];
      var activity_name = acvitity['activity_name'];
      var release_date = acvitity['release_date'];
      var release_time = acvitity['release_time'];
      //wait to response
      const getData = async () => {
        const res = await Api_cloud_ask_activity(activity_id,activity_name,release_date,release_time)
        // console.log(res);
        if(res)
        {
          if(res['data'].length > 0 )
          {
            ApiCloud_StaticParams_acvitity.push(res.data[0]);
            // console.log(ApiCloud_StaticParams_acvitity);
          }
        }
      };
      getData();
    }
    // ApiCloud_StaticParams_acvitityID = res.data
  });
}

async function Api_cloud_ask_activity(activity_id,activity_name,release_date,release_time)
{
  var params = {
    'mxid':ApiCloud_StaticParams_mxid,
    "activity_id": activity_id,
    "activity_name": activity_name,
    "release_date": release_date,
    "release_time": release_time
  }
  var res =  await axios.post(api_options['readActivity'],params);
  // console.log(res);
  return res;
}

export default Api_cloud_ask;