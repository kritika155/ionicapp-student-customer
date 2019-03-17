import { Component, OnInit } from '@angular/core';
import  CustomerService  from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss'],
})
export class AddcustomerComponent implements OnInit {
  customer:any={
    name:"",
    email:"",
    phone:"",
    address:"",
};

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit() {
    //this.list=this.customerService.getCustomers();
  }
  addCustomer(customer){
    this.customerService.addCustomer(customer);
    this.customerService.getCustomers();
    this.router.navigate(['/list-customer']);
  }
  
}
