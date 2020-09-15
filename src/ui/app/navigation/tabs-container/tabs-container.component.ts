import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exupery-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements OnInit {

  tabs: Array<any> = [
    {
      active: true
    },
    {
      active: false
    },
    {
      active: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
