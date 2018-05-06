import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() {
    this.initHandleMainMenu();
  }

  initHandleMainMenu() {
    $(document).ready(function() {

      // Add toggle menu open class
      $('.container-nav-menu .hamburger').click(function(e) {
        e.preventDefault();
        let menu = $('.container-nav-menu');
        menu.toggleClass('nav-menu-open');
      });

    });
  }

  ngOnInit() {
  }

}
