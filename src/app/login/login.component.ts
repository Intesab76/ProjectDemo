// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private http:HttpClient) { }

//   ngOnInit(): void {
//   }

//   url = "http://localhost:8080/api/bank";

//   getData(){

//   }

// }




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../service/authenticate.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from '../app.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { PageErrorComponent } from '../page-error/page-error.component';
import { HomeComponent } from '../home/home.component';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userVal = ''
  passVal = ''
  invalidLogin = false

  constructor(private router: Router,
     private http:HttpClient)  { }

  ngOnInit() {
  }

  url = "http://localhost:8080/api/bank";
  arr  = {};

  // routes = [
  //   {linkName : 'Home' , url:'Home'},
  //   {linkName : 'Log In' , url:'Login'},
  //   {linkName:'Sign Up' , url:'SignUp'},
  //   {linkName:'About Us' , url:'AboutUs'},
  //   {linkName:'Contact' , url:'Contact'},
  
  // ]


  checkLogin() {

    this.invalidLogin = true;

    this.http.get<any[]>(this.url).subscribe( (data) => {

      this.arr = JSON.stringify(data);
     // console.log( "Values in the 2nd row is ::" ,data[1]);
    } , 
      err => {
        alert("An error has occured.. ");
      }
    );
    alert('Login successful !!');
    this.router.navigate(['Transaction']);

    }
  
}

























// console.log('got the response');
      // this.storeValues = JSON.stringify(data);
      // console.log(data[2].firstname);
      // JSON.stringify(this.storeValues);
      // for(let i=0;i<data.length;i++){
      // this.userVal = data[i].username;
        // console.log(this.userVal);
       // this.passVal = data[i].passwrd;
        // console.log(data[i].username , data[i].passwrd);
        // this.storeValues = JSON.stringify(data[i].firstname);
      // }
      // console.log(this.userVal);

