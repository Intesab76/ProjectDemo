import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amt :number;

  getAmount(){
    this.amt = Math.floor(Math.random()*100);
  }

  num:number;
  show=''; 
  boolVar = false;
  putAmount(){

    this.boolVar = true;
    this.num = Math.random()*1000 ;
    this.show = 'Amount has been added successfully and current amount is '+this.num;
  }

value:any;

  total(){

    this.value = this.amt + this.num;
  }

}
