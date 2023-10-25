import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { async } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();// élément de rxjs permet de stocker flux de donner dans le temps comme le deboncetime
  pokemons$: Observable<Pokemon[] | null>;

  constructor(private router: Router, private pokemonService : PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {...."ab"..."abz"."ab"...."abc"......}
      debounceTime(300),
      // {......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      // {......"ab"..........."abc"......}
      switchMap((term) => {
        if(term.split('').length <2){
          return of(null)
        }
        return this.pokemonService.searchPokemonList(term)
      })
      // {.....pokemonList(ab)............pokemonList(abc)......}
    );
  }
  search(term: string){
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ["/pokemon",pokemon.id];
    this.router.navigate(link);
  }
}
