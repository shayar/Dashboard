import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/Order';



@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})


export class SectionOrdersComponent implements OnInit {
  orders: Order = [
// tslint:disable-next-line: max-line-length
    {id: 1, customer: {id: 6, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2)},
// tslint:disable-next-line: max-line-length
    {id: 2, customer:{id: 7, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2)},
// tslint:disable-next-line: max-line-length
    {id: 3, customer:{id: 8, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2)},
// tslint:disable-next-line: max-line-length
    {id: 4, customer:{id: 9, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2)},
// tslint:disable-next-line: max-line-length
    {id: 5, customer:{id: 10, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 2)}  
  ];
  constructor() { }

  
  ngOnInit() {
  }

}
