import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'PolicyReportPipe' })
export class PolicyReportPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(policy=> {
        if (policy.policyNumber) {
          console.log(policy)
          return policy.policyNumber.toString().search(searchText) !== -1;

        }
      });
    }
  }
}