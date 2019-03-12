import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/Server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'dev-mail', isOnline: false},
  {id: 3, name: 'prod-web', isOnline: true},
  {id: 4, name: 'prod-mail', isOnline: true},
];
@Component({
  selector: 'app-section-healths',
  templateUrl: './section-healths.component.html',
  styleUrls: ['./section-healths.component.css']
})
export class SectionHealthsComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;
  ngOnInit() {
  }

}
