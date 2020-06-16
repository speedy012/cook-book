import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: object[]
  recipeTitle: string

  constructor() { }

  ngOnInit() {
    this.recipeTitle = '';
    this.recipes = [
      { title: 'eggs', rows: 2, cols: 2, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fediblesarasota.ediblecommunities.com%2Frecipes%2Fsunnyside-eggs&psig=AOvVaw1qtM4oX6wCln5kEK9T-AmG&ust=1592357120698000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCph9mWheoCFQAAAAAdAAAAABAD'},
       { rows: 1, cols: 1},
       { rows: 2, cols: 1},
       { rows: 1, cols: 1},

       { rows: 1, cols: 1},
       { rows: 2, cols: 2},
       { rows: 1, cols: 1},
       { rows: 1, cols: 1},
       { rows: 1, cols: 1},

       { rows: 1, cols: 1,},
       { rows: 1, cols: 1,},
       { rows: 2, cols: 2,},
       { rows: 1, cols: 1,},
       { rows: 1, cols: 1,},
    ]
  }
}
