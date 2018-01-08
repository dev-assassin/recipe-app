import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'This is a simple test',
      'http://www.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg'),
    new Recipe('Another test Recipe',
      'This is another simple test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Third Recipe',
      'This is third recipe',
      'http://deizi23.com/wp-content/uploads/2015/09/Fresh-Recipe-Logo-e1443186115710.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
