import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(JSON.parse(campaignFactory.interface), "***REMOVED***");


export default instance;
