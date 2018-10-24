import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    records = records || [];
    return records.sort((a, b) => {
      var x, y;
      if (!isNaN(a[args.property])) {
        x = parseInt(a[args.property]);
        y = parseInt(b[args.property]);
      } else {
        x = a[args.property];
        y = b[args.property];
      }
      if (x < y) {
        return (-1) * args.direction;
      }
      else if (x > y) {
        return args.direction;
      }
      else {
        return 0;
      }
    });
  };
}
