const fetch = require('node-fetch');

module.exports = {
	name: "covid",
	descriptions: "Wyswietla informacje o śmierciach, zarażonych itp. ",
	aliases: ["corona"],
	usage: "!covid <kraj> (domyślnie ustawione Polska",

	async run(msg, args) {
		var country = args[0];

		if (country === "polska" || country === undefined) {
			country = 'poland';
		}
		const url = `https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&twoDaysAgo=false&strict=false&allowNull=false`;
		fetch(url).then(res => res.json()).then(data => {
			if (data.msg) {
				msg.reply(data.msg)
			} else {
				msg.reply(`
					Kraj: ${data.country}
					Liczba śmierci: ${data.deaths}
					Przypadki dzisiaj: ${data.todayCases}
					Zgony dzisiaj: ${data.todayDeaths}
				`)
			}
		})
	}
}