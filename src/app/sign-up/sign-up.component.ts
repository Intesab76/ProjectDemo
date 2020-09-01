// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-sign-up',
// //   templateUrl: './sign-up.component.html',
// //   styleUrls: ['./sign-up.component.css']
// // })
// // export class SignUpComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }




// import { Component, OnInit } from '@angular/core';
// import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
// import { NgForm} from '@angular/forms';

// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css']
// })
// export class SignUpComponent implements OnInit {
   
//   // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.resetForm();
//   }
//   user:any=[] ;

//   resetForm(form?: NgForm) {
//     if (form != null)
//       form.reset();
//     this.user = {
//       firstName: '',
//       lastName: '',
//       userName: '',
//       gender: '',
//       email: '',
//       passwrd:'',
//       dob:''
//     }
//   }

//   // OnSubmit(form: NgForm) {
//   //   this.userService.registerUser(form.value)
//   //     .subscribe((data: any) => {
//   //       if (data.Succeeded == true) {
//   //         this.resetForm(form);
//   //         // ('User registration successful');
//   //       }
//   //       else
//   //            console.error(data.Errors[0]);
//   //     });
//   // }


//   msg:any=[];
//   url = "http://localhost:8080/api/bank";


//   dataPosted = {
//     "firstname": "abcde",
//     "lastname": "qweerty",
//     "username": "qwe1234 ",
//     "gender": "Female",
//     "email": "qwer@gmail.com",
//     "passwrd": "123erty67",
//     "dob": "1999-07-09"
//   }

//   head = {
//     header: new HttpHeaders({ 'Content-type' : 'application/json' , 'Accept':'application/json',
//                   'Access-Control-Allow-Headers': 'Content-Type' })   
//   }


//   first = '';
//   last = '';
//   username ='';
//   gender ='';
//   email='';
//   pass ='';
//   dob = '';
//   signArr =['s1','s2','s3','s4','s5','s6','s7'];



//   postData() {
//     // let obs = this.http.post(this.url ,this.dataPosted, this.head);
//     //   obs.subscribe( (data) => {
//     //    //this.msg = data;
//     //   console.log( data)
//     // } , 
//     //   err => {
//     //     alert("An error has occured.. ");
//     //   }
//     // );

//     "firstname" :  this.first,
//     "lastname" :   this.last,
//     "username" :  this.user,
//     "gender":  this.gender,
//     "email":   this.email,
//     "passwrd" : this.pass,
//     "dob":  this.dob,

//     console.log(this.first);
//     console.log(JSON.stringify(this.dataPosted));
//    const headers= {'content-type':'application/json'};

//     let obs = this.http.post(this.url , JSON.stringify(this.dataPosted),{'headers':headers});
//     obs.subscribe( (response) => 
//       console.log(response) );

//   }
// }

import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  url = 'http://localhost:8080/api/bank';

  flag = false;
  first = '';
  last = '';
  user ='';
  gender ='';
  email='';
  pass ='';
  dob = '';
  signArr =['s1','s2','s3','s4','s5','s6','s7'];
  showMsg ='Enter the credentials';

  msg:String='';
  postMsg='Before signUp !!';



  constructor(private router:Router , private http : HttpClient) { }

  ngOnInit(): void {
  }

  // posteData(){
  //   //this.postMsg = 'hello from sign up !!';
  //   this.flag = true;
  //   this.signArr.push(this.first);
  //   this.signArr.push(this.last);
  //   this.signArr.push(this.user);
  //   this.signArr.push(this.gender);
  //   this.signArr.push(this.email);
  //   this.signArr.push(this.pass);
  //   this.signArr.push(this.dob);
  //   this.showMsg = 'New credentials are :: ';

  // }


  savedData = {

    // "firstname" :  this.first,
    // "lastname" :   this.last,
    // "username" :  this.user,
    // "gender": this.gender,
    // "email": this.email,
    // "passwrd" :  this.pass,
    // "dob":  this.dob,
    "firstname" : 'ghjkl',
    "lastname" :   'pqrs'  , 
    "username" :  'abcd123',  
    "gender":  'Female',          
    "email":    'aasjh@gmail.com',           
    "passwrd" :  'saas789',                  
    "dob":   '1999-12-10'         

  }
  msg1='';

  postData(){

  //   const savedData = {

  //     "firstname" :  this.first,
  //   "lastname" :   this.last,
  //   "username" :  this.user,
  //   "gender":  this.gender,
  //   "email":   this.email,
  //   "passwrd" : this.pass,
  //   "dob":  this.dob,

  // }


    console.log(this.first);
    console.log(JSON.stringify(this.savedData));
   const headers= {'content-type':'application/json'};

    let obs = this.http.post(this.url , JSON.stringify(this.savedData),{'headers':headers});
    obs.subscribe( (response) => 
      console.log(response) );

      this.msg1 = 'Data Added Successfully !! Get it confirmed via console !!';


  }


  goTOHome(){
    this.msg = 'Go to Home Page';
  }

  getHome(){
    this.router.navigate(['Home']);
  }
  getLog(){
    this.router.navigate(['Login']);

  }
  getSign(){

    this.router.navigate(['SignUp']);

  }

  getContact(){
    this.router.navigate(['Contact']);

  }
  aboutUs(){

  }

}
