import axios from 'axios';

export interface Country {
    id: string;
    country: string;
    quantity: number;
}

export interface Company {
  id: string;
  country: string;
  category: string;
  name: string;
  status: string;
  promotion: boolean;
  createdAt: string;
  info: string;
  promotions: {
    promotion: string;
    title: string;
    subtitle: string;
  }[];
}


export interface Companies{
  id: string;
  country: string;
  category: string;
  name: string;
  status: string;
  promotion: boolean;
  createdAt: string;
  info: string;
  promotions: {
    promotion: string;
    title: string;
    subtitle: string;
  }[];
}


const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

export const api = axios.create({
  baseURL: `https://${PROJECT_TOKEN}.mockapi.io/crm/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCountries = async (): Promise<Country[]> => {
    try {
        const response = await api.get<Country[]>('countries');

        return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch countries');
  }
};

export const fetchCompanies = async (): Promise<Companies[]> => {
    try {
        const response = await api.get<Companies[]>('companies');
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw new Error('Failed to fetch countries');
  }
};