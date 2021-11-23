import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(JSON.parse(campaignFactory.interface), "0x758CA91DC3787857588da9d6366162D045f0C7b9");


export default instance;
