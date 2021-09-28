export default class Country {
	constructor() {
		this._basePath = 'https://restcountries.com/v3';
	}

	async fetchAllCountries() {
		const endpoint = `${this._basePath}/all`;
		try {
			const countries = await (await fetch(endpoint)).json();
			return countries;
		} catch (error) {
			throw error;
		}
	}
}
