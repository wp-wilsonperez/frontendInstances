import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'BillingReportPipe' })
export class BillingReportPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(billing=> {
        if (billing.billingNumber) {
          return billing.billingNumber.toString().search(searchText) !== -1;
        }
      });
    }
  }
}