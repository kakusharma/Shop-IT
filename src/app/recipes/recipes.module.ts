import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-route.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { SharedModule } from '../shared/shared.module';
import { MinlengthValidatorDirective } from '../shared/minlength-validator.directive';
import { recipeReducers } from './recipe-store/recipe.reducers';
import { RecipeEffects } from './recipe-store/recipe.effects';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeDetailComponent,
		RecipeListComponent,
		RecipeItemComponent,
		EditRecipeComponent,
		SelectRecipeComponent,
		MinlengthValidatorDirective
	],
	imports: [
		SharedModule,
		ReactiveFormsModule,
		RecipesRoutingModule,
		StoreModule.forFeature('recipes', recipeReducers),
		EffectsModule.forFeature([RecipeEffects])
	]
})
export class RecipesModule {

}
