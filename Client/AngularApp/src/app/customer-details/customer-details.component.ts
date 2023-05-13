import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomerService} from '../customer-service';
import {Observable} from 'rxjs';
import {Customer} from 'src/models/Customer';
import {ActivatedRoute} from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private service: CustomerService,private route: ActivatedRoute,public dialog: MatDialog) {
  }

  customers$!: Observable<any>;
  customer1!: Customer;

  @Input() identityNumber!: string;
  @Input('identity')
  identity!: string;
  identityParam!: string | null;

  @Input('customer')
  customer!: Customer;

  ngOnInit(): void {

    this.route.paramMap.subscribe((res:any) => {

      this.identityParam = res.params.id;
      console.log(this.identity); // Use the parameter value as required
    });

    this.customer1 = {} as Customer;
    this.customer = {} as Customer;
    if( this.identityParam != null){
      this.identity = this.identityParam;
    }

    if (this.identity != null) {
      this.customers$ = this.service.getCustomerByIdentityNumber(this.identity);
      this.customers$.subscribe((customer: Customer) => {
        if (customer) {
          this.customer.firstName = customer.firstName;
          this.customer.lastName = customer.lastName;
          this.customer.city = customer.city;
          this.customer.street = customer.street;
          this.customer.houseNumber = customer.houseNumber;
          this.customer.zipCode = customer.zipCode;
          this.customer.contracts = customer.contracts;
        }
      });
      console.log(this.customers$);
    }
  }

  openDialog(){

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { customomer:this.customer }
    });

    // Subscribe to the dialog's afterClosed() event
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions or data returned from the dialog
      console.log('Dialog closed', result);
    });
  }
}
