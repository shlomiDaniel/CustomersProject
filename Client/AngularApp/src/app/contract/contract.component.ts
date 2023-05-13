import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from "../customer-service";
import {Observable} from "rxjs";
import {Customer} from "../../models/Customer";
import {Contract} from "../../models/Contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit{
  constructor(private service: CustomerService) {
  }

  customers$!: Observable<any>;
  customer1!: Customer;

  @Input() identityNumber!: string;
  @Input('identity')
  identity!: string;

  @Input('contract')
  contract!: Contract;


  ngOnInit(): void {


  }
}
