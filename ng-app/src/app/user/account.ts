import {User} from './user';
import {Authority} from './authority';


export class Account{
  id : number;
  user :User ;
  name : string;
  surname : string;
  authorities : Authority[];

}

