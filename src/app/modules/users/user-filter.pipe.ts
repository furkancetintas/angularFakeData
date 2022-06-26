import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from './models/user.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: UserModel[], filterText: string): UserModel[] {
    filterText = filterText ? filterText.toLocaleLowerCase():"";
    return filterText?value.filter((u:UserModel)=>u.name.toLocaleLowerCase().indexOf(filterText)!==-1 
    || u.id.toPrecision().includes(filterText)):value;
  }

}
