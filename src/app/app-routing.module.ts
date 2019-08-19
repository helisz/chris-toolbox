import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { RateListFormatterComponent } from './pages/rate-list-formatter/rate-list-formatter.component';
import { ComnetProdGenComponent } from './pages/comnet-prod-gen/comnet-prod-gen.component';
import { Demo1MainComponent } from './pages/demo1/demo1-main/demo1-main.component';
import { CnconverterComponent } from './pages/cnconverter/cnconverter.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/'},
  // { path: '**', pathMatch: 'full', redirectTo: '404'},

  { path: '', component: LandingComponent},
  { path: 'rate', component: RateListFormatterComponent},
  { path: 'comnet-prd', component: ComnetProdGenComponent},
  { path: 'demo1', component: Demo1MainComponent},
  { path: 'cnconverter', component: CnconverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
