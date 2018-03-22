const yargs = require('yargs');

const axios = require('axios');

const argv = yargs.options({
	
	coin:{
		demand:true,
		alias:"c",
		describe:"Name of the cryptocurrency",
		string:true,
		default:"Bitcoin"
	},

	changeInto:{
		default:"inr",
		alias:"ch",
		describe:"Define currency standard to change the cryptocurrency",

	}


})
.help()
.alias('help','h')
.argv;


 
let coin = argv.coin;

let ch = argv.ch.toUpperCase();


axios.get(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${argv.ch}`).then((response) => {



	if(response.status === 200){
		let data = response.data[0];
		let json = JSON.stringify(data,undefined,2);
		let _price_ = json.includes(`price_${ch.toLowerCase()}`);
		





		console.log(`--------${coin}-------`);
		console.log(`Name: ${data.name}`);
		console.log(`Symbol: ${data.symbol}`);
		console.log(`Price usd: ${data.price_usd}`);
		console.log(`Price btc: ${data.price_btc}`);
		console.log(`Percent change 1h: ${data.percent_change_1h}`);
  		console.log(`Percent change 24h: ${data.percent_change_24h}`);
  		console.log(`Percent_change_7d: ${data.percent_change_7d}`);
  		console.log(`last_updated: ${data.last_updated}`);
  		(_price_)?console.log("Price in "+argv.ch.toUpperCase()+": "+eval(`data.price_${ch.toLowerCase()}`)):'';
  	
  	

		

	}

}).catch(() => {

	console.log("Something happend wrong");

})