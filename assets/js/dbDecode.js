const decodeArticleSummaries = db => {
	return db.map(article => ({
		id: article.id,
		title: article.t,
		description: article.d,
		published: article.p
		// etc
	}));
};

export { decodeArticleSummaries };