import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent,},
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule',  },
	// {path: 'shoppinglist', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule', canLoad: [AuthGuard]},
	{ path: 'shoppinglist', component: ShoppingListComponent,  },
	{ path: '**', redirectTo: '' }
];
@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})
export class AppRouteModule {

}
