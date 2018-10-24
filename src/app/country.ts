export class ICountry {
    Code: string;
    Name: string;
    Continent: string;
    Region: string;
    SurfaceArea: string;
    IndepYear: string;
    Population: number;
    LifeExpectancy: string;
    GNP: string;
    GNPOld: string;
    LocalName: string;
    GovernmentForm: string;
    HeadOfState: string;
    Capital: string;
    Code2: string;
}

export class City {
    ID: string;
    Name: string;
    CountryCode: string;
    District: string;
    Population: string;
}

export class CountryLanguage {
    CountryCode: string;
    Language: string;
    IsOfficial: string;
    Percentage: string;
}

export class World {
    countries: ICountry[];
    cities: City[];
    countrylanguage: CountryLanguage[];
}
