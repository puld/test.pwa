const fs = require("fs");
const parseString = require('xml2js').parseString;
fs.readdir("static/xmls/", (err, filePaths) => {

	let items = filePaths.map(path => {

		const contents = fs.readFileSync("static/xmls/" + path, 'utf8');
		const n = path.match(/[aа](\d+)\.xml/)[1];
		const xmlString = '<root>' + contents + '</root>';

		let item = {
			n: parseInt(n),
		};

		parseString(xmlString, {
			trim: true,
			explicitChildren: true,
			preserveChildrenOrder: true,
			explicitRoot: false,
			explicitArray: false,
		}, function (err, result) {

			let verseId = 0;

			item.title = result.title;
			item.body = result.body.$$.map(item => {
				let data = {
					type: item['#name']
				};

				if (data.type === "verse") {
					data.id = verseId++;
					data.content = item._;
				} else {
					if (item.$.id) {
						data.id = item.$.id;
						data.content = item._;
					}
					if (item.$.repeatId) {
						data.repeatId = item.$.repeatId;
					}
				}
				return data;
			});
		});
		return item;
	});
	items.sort((a,b)=>a.n-b.n);


	let jsonItems ={};
	items.map(item => {jsonItems[item.n] = item});

	fs.unlinkSync("static/songs.json");
	fs.writeFileSync(
		"static/songs.json",
		JSON.stringify(jsonItems)
	);
});
