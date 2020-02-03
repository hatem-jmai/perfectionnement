import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodyhome',
  templateUrl: './bodyhome.component.html',
  styleUrls: ['./bodyhome.component.css']
})
export class BodyhomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
    }); // end of document ready
  }; // end of jQuery name space
  
}
