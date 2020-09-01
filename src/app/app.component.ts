import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){

  }


  title = 'Internet-Banking';
  routes = [
    {linkName : 'Home' , url:'Home'},
    {linkName : 'Log In' , url:'Login'},
    {linkName:'Sign Up' , url:'SignUp'},
    {linkName:'About Us' , url:'AboutUs'},
    {linkName:'Contact' , url:'Contact'},
  ]


  ngOnInit(){
    
  }


}
