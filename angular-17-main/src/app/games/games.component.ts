import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h1>Los juegos de {{ username }}</h1>
    @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{game.name}}</li>
    }
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>(); 
  
  games = [
    {
      id: 1,
      name: 'Fornite'
    },
    {
      id: 2,
      name: 'Valorant'
    },
    {
      id: 3,
      name: 'LOL'
    }
  ]
  fav(gameName: string){
    this.addFavoriteEvent.emit(gameName)
  } 
}
