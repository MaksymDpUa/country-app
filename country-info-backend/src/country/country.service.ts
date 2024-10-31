import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryService {
  async getAvailableCountries() {
    try {
      const response = await axios.get(
        `${process.env.API_BASE_URL}/AvailableCountries`,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching list of countries',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCountryInfo(countryCode: string) {
    try {
      const countryInfo = await axios.get(
        `${process.env.API_BASE_URL}/CountryInfo/${countryCode}`,
      );

      const countryName = countryInfo.data.commonName;
      const isoResponse = await axios.post(
        `${process.env.COUNTRIESNOW_BASE_URL}/countries/iso`,
        {
          country: countryName,
        },
      );
      const iso3Code = isoResponse.data.data.Iso3;

      const [populationData, flagData] = await Promise.all([
        axios.post(
          `${process.env.COUNTRIESNOW_BASE_URL}/countries/population`,
          {
            iso3: iso3Code,
          },
        ),
        axios.post(
          `${process.env.COUNTRIESNOW_BASE_URL}/countries/flag/images`,
          {
            iso2: countryCode,
          },
        ),
      ]);

      return {
        name: countryName,
        borders: countryInfo.data.borders,
        population: populationData.data.data.populationCounts,
        flag: flagData.data.data.flag,
      };
    } catch (error) {
      throw new HttpException(
        'Error fetching country information',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
