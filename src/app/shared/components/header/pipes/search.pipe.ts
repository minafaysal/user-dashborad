import { Pipe, PipeTransform } from '@angular/core';
import { USER } from 'src/app/shared/models/common.models';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(userList: USER[], searchKey: string): USER[] {
    return userList.filter((user) =>
      user.id.toString().includes(searchKey.toString())
    );
  }
}
