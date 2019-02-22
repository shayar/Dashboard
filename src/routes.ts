import {Routes} from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';
import { SectionHealthsComponent } from './app/sections/section-healths/section-healths.component';

export const appRoutes: Routes = [
    {path: 'sales', component: SectionSalesComponent },
    {path: 'orders', component: SectionOrdersComponent },
    {path: 'health', component: SectionHealthsComponent },

    {path: '', redirectTo: '/sales', pathMatch: 'full'}

];
