import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthsComponent } from './sections/section-healths/section-healths.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      SectionOrdersComponent,
      SectionSalesComponent,
      SectionHealthsComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
