import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserService } from 'app/core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private browserService: BrowserService
  ) { }

  ngOnInit(): void { }

  public newTab(): void {
    this.browserService.createNewTab();
  }
}
