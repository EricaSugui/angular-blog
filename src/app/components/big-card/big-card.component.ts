import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', 'big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  Id: string="0"
  bigCard = dataFake.slice(-1)

  constructor() { }

  ngOnInit(): void {
  }

}
