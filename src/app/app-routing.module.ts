import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { SignUpComponent} from  './sign-up/sign-up.component';
import { AboutUsComponent} from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {PageErrorComponent} from './page-error/page-error.component';
import { HomeComponent}  from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  
  {
    path:'' , redirectTo:'/Home' , pathMatch:'full'
  },
  {
    path:'Home', component: HomeComponent
  },
  {
    path: 'Login' , component : LoginComponent
  },
  {
    path: 'SignUp' , component : SignUpComponent
  },
  {
    path: 'AboutUs' , component:AboutUsComponent
  },
  {
    path: 'Contact' , component: ContactUsComponent
  },
  {
    path:'Transaction', component: TransactionComponent
  },
  {
    path:'**' , component: PageErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
