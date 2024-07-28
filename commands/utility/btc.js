const { SlashCommandBuilder } = require('@discordjs/builders');
const { cryptoApi } = require('../../config.json');
const axios = require('axios');

let config = {
  method: 'get',
	maxBodyLength: Infinity,
  url: 'https://rest.coinapi.io/v1/exchangerate/BTC/USD',
  headers: { 
    'Accept': 'application/json', 
    'X-CoinAPI-Key': cryptoApi,
  }
};


module.exports = {
	data: new SlashCommandBuilder()
		.setName('btc')
		.setDescription('Replies with the value of BTC in USD!'),
	async execute(interaction) {
		axios(config)
		.then(async (response) => {
			var btc = response.data.rate;
			await interaction.reply(`Bitcoin is currently at $${btc}`);
		})
		.catch((error) => {
			console.log(error);
		});
	},
};



