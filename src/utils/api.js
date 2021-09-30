export default class Country {
	constructor() {
		this._basePath = 'https://restcountries.com/v2';
	}

	async fetchAllCountries() {
		const endpoint = `${this._basePath}/all?fields=name,population,region,capital,flags,nativeName,subRegion,topLevelDomain,currencies,languages,borders,alpha3Code,alpha2Code`;
		try {
			const countries = await (await fetch(endpoint)).json();
			return countries;
		} catch (error) {
			throw error;
		}
	}
}
