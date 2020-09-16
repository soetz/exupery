import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exupery-blocks-container',
  templateUrl: './blocks-container.component.html',
  styleUrls: ['./blocks-container.component.scss']
})
export class BlocksContainerComponent implements OnInit {

  blocks: Array<any> = [
    {},
    {},
    {}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
