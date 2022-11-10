import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  async execute(){
    
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=5'; 

    const { data } = await this.axios.get<PokeResponse>(url);

    data.results.forEach( ( { name, url } ) => {
      
      const segments = url.split('/');

      const idPokemon = +segments[ segments.length -2 ];
      
    });
    
    return data.results;

  }
  
}
