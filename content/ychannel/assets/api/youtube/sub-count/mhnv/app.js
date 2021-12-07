// const { default: Axios} = require(axios);


const APIkey = "AIzaSyBUnG1mArWfBbD4ots9ieQaImtUCNvOVNo";
const youtubeID = "UCg6gPGh8HU2U01vaFCAsvmQ";  // youtube id 

const subCount =  document.querySelector(".sub-count");

const gyoutubes = async () => {
  const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`);
  
  const ytSubs = getData.data.items[0].statistics.subscriberCount;

  subCount.innerHTML = ytSubs;


};

gyoutubes();