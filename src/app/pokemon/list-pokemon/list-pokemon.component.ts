import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon/pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[]; //on a typé pokemon avec un tableau d'objet de pokemon
  constructor(private router: Router, private pokemonService: PokemonService) {}
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
  ngOnInit(){
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);

  }
}
