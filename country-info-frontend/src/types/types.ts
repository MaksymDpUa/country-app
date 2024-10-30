export interface Border {
  commonName: string;
  countryCode: string;
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface Country {
  name: string;
  flag: string;
  borders: Border[];
  population: PopulationData[];
}

export interface PopulationData {
  year: number;
  value: number;
}

export interface PopulationChartProps {
  populationData: PopulationData[];
}
