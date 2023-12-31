import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon/pokemon.service';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); // récupération du praramétre de l'url
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }
  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id).subscribe(()=>this.goToPokemonList())
  }
}
