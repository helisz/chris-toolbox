import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { Demo1MainComponent } from './pages/demo1/demo1-main/demo1-main.component';
import { FireEmblemComponent } from './pages/fire-emblem/fire-emblem.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/' },
	// { path: '**', pathMatch: 'full', redirectTo: '404'},

	{ path: '', component: LandingComponent },
	{ path: 'demo1', component: Demo1MainComponent },
	{ path: 'fire-emblem', component: FireEmblemComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
