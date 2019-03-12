import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthsComponent } from './sections/section-healths/section-healths.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ServerComponent } from './server/server.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      SectionOrdersComponent,
      SectionSalesComponent,
      SectionHealthsComponent,
      PieChartComponent,
      LineChartComponent,
      BarChartComponent,
      ServerComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      ChartsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
