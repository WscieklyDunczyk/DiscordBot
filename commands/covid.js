const { Message } = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function(msg, args){
	var country = args[0];
	
	if(args[0] === "polska"){
		country = 'poland';
	}
	if(args[0] === undefined){
		country = 'poland';
	}
	
	const url = `https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&twoDaysAgo=false&strict=false&allowNull=false`;
		fetch(url).then(res => res.json()).then(data => {if (data.msg) {
			msg.reply(data.msg)
			}
			else {
			msg.reply(`
			Kraj: ${data.country}
			Liczba śmierci: ${data.deaths}
			Przypadki dzisiaj: ${data.todayCases}
			Zgony dzisiaj: ${data.todayDeaths}
			`)}
		})
}
        
