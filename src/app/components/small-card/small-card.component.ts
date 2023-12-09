import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', 'small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  Id: string="0"
  aux = dataFake.slice(-4) // pega os últimos 4 posts
  reverse = this.aux.reverse() // ordena do mais novo ao mais antigo
  smallCards = this.reverse.slice(-3) // descarta o mais novo, pois ele vai no big-card

  constructor() {
   }

  ngOnInit(): void {
  }

}
