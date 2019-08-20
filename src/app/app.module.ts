import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Demo1MainComponent } from './pages/demo1/demo1-main/demo1-main.component';
import { Demo1AddComponent } from './pages/demo1/demo1-add/demo1-add.component';
import { FireEmblemComponent } from './pages/fire-emblem/fire-emblem.component';
import { TopbarComponent } from './topbar/topbar.component';

registerLocaleData(en);

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SidebarComponent,
		LandingComponent,

		Demo1MainComponent,
		Demo1AddComponent,
		FireEmblemComponent,
		TopbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgZorroAntdModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule
	],
	providers: [{ provide: NZ_I18N, useValue: en_US }],
	bootstrap: [AppComponent]
})
export class AppModule {}
