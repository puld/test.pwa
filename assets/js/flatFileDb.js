import { decodeArticleSummaries } from "./dbDecode";

const getSongs = async () => {
	try {
		const db = await import(`@/static/songs.json`);
		return db.default; //decodeArticleSummaries(db.default);
	} catch (err) {
		console.log(err);
		return [];
	}
};

const getSong = async (n) => {
	try {
		const db = await import(`@/static/songs.json`);
		return db.default[n];
	} catch (err) {
		console.log(err);
		return undefined;
	}
};

export { getSongs, getSong };