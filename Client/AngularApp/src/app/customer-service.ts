import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  readonly baseCustomersUrl = 'https://localhost:7244/api';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get(this.baseCustomersUrl + '/customers');
  }
  getCustomersById(id: string): Observable<any> {
    return this.http.get(this.baseCustomersUrl + '/customers/' + id);
  }
  getCustomerByIdentityNumber(identityNumber: string): Observable<any> {

    return this.http.get(
      this.baseCustomersUrl +
        '/customers/GetCustomerByIdentityNumber/' +
        identityNumber
    );
  }
  addCustomer(customer: any): Observable<any> {
    return this.http.post(this.baseCustomersUrl + '/customers', customer);
  }
  updateCustomer(customer: any): Observable<any> {
    return this.http.put(this.baseCustomersUrl + '/customers', customer);
  }
  updateCustomer2(identity: string, customer: any): void {

    const url = `${this.baseCustomersUrl}/Customers/PutCustomerByCustomerOBj/${identity}`; // Replace with your API endpoint URL
    this.http.put(url, customer)
      .subscribe(
        () => {
          console.log('Customer updated successfully');
          // Handle success or perform any additional operations
        },
        (error) => {
          console.error('Error updating customer', error);
          // Handle error
        }
      );
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseCustomersUrl + '/customers/' + id);
  }
}
