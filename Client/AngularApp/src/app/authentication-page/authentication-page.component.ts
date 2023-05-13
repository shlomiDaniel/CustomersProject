import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {CustomerService} from '../customer-service';
import {Customer} from 'src/models/Customer';
import {Contract} from 'src/models/Contract';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.css'],
})
export class AuthenticationPageComponent implements OnInit {
  constructor(public customerService: CustomerService) {
  }

  ngOnInit(): void {
    //this.showCustomerDetails();
  }

  identity!: string;
  customer!: Customer;
  customerId!: string;
  inputValue!: string;
  childValue!: string;
  identityNumber!: string;

  validateIsraeliID(): boolean {
    if (this.identity.length !== 9) {
      alert('תעודת הזהות שגויה');
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      let digit = parseInt(this.identity.charAt(i), 10);
      if (i % 2 === 0) {
        digit *= 1;
      } else {
        digit *= 2;
        if (digit > 9) {
          digit =
            parseInt(digit.toString().charAt(0), 10) +
            parseInt(digit.toString().charAt(1), 10);
        }
      }
      sum += digit;
    }
    if (sum % 10 !== 0) {
      alert('תעודת הזהות שגויה');
      return false;
    }

    return true;
  }

  showCustomerDetails(identity: string): void {

    if (this.identity != null) {
      if (this.validateIsraeliID()) {
        this.identity = identity;

        this.customerService
          .getCustomerByIdentityNumber(this.identity)
          .pipe(
            catchError((error) => {

              console.error('Error fetching customer:', error);

              return of(null);
            })
          )
          .subscribe((data: Customer) => {

            if (data) {
              this.customer = data;
              console.log(data);
            } else {
              this.customer = {} as Customer;
              alert('משתמש לא קיים במאגר , נסה שנית');
            }
          });
      }
    }
  }


}
