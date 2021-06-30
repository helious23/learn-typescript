export interface SummaryData {
    Countires: {Country: string,
      CountryCode: string,
      Slug: string,
      NewConfirmed: number,
      TotalConfirmed: number,
      NewDeaths: number,
      TotalDeaths: number,
      NewRecovered: number,
      TotalRecovered: number,
      Date: string}[]
}

export interface DeathDataByCountry {
    Country: string,
    CountryCode: string,
    Lat: string,
    Lon: string,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number,
    Date: string,
    LocationID: string
  }