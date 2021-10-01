export default class Country {
	constructor() {
		this._basePath = 'https://restcountries.com/v3.1';
	}

	async fetchAllCountries() {
		const endpoint = `${this._basePath}/all?fields=name,population,region,subregion,capital,flags,tld,currencies,languages,borders,cca3,cioc`;
		try {
			const countries = await (await fetch(endpoint)).json();
			return countries;
		} catch (error) {
			throw error;
		}
	}
}
