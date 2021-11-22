const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

// get wallet provider for rinkeby
// uses infura node api and mnemonic to gen accounts
const provider = new HDWalletProvider(
	"***REMOVED***",
	"***REMOVED***"
);

const web3 = new Web3(provider);

// deploy contract to rinkeby
// logs resulting contract address to the console
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log("Attempting to deploy from account", accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: "1000000", from: accounts[0] });

	console.log("Contract deployed to", result.options.address);
	provider.engine.stop();
};

deploy();
