import { BaseClass } from '../shared/base-class';



export class User extends BaseClass {
    firstName;
    lastName;
    infix;
    emailAddress;
    
    constructor(item: {}) {
        super();
        this.firstName = item['firstName'];
        this.infix = item['infix'];
        this.lastName = item['lastName'];
        this.emailAddress = item['emailAddress'];

    }

}
