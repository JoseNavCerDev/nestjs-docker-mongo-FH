import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}

  async execute(){    
    //await this.pokemonModel.deleteMany({});
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=650'; 
    const data = await this.http.get<PokeResponse>(url);
    const pokemonToInsert: { name: string, no: number }[] = [];    
    data.results.forEach( ( { name, url } ) => {      
      const segments = url.split('/');
      const idPokemon = +segments[ segments.length -2 ];         
      pokemonToInsert.push({ name, no: idPokemon });
    });    
    await this.pokemonModel.insertMany( pokemonToInsert );    
    return {
      msg: "Seed Executed"
    };

  }
  
}
