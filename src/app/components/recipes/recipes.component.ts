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
      { title: 'eggs', rows: 2, cols: 2, url: 'https://images.unsplash.com/photo-1521513919009-be90ad555598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
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
