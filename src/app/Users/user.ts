import { BaseClass } from '../shared/base-class';



export class User extends BaseClass {
    firstName;
    lastName;
    infix;
    emailAddress;
    passWord;
    branchId;
    
    constructor(item: {} = {}) {
        super();
        this.branchId = item[0]
        this.firstName = item[1];
        this.lastName = item[2];
        this.id = item[3];
        this.infix = item[4];
        this.emailAddress = item[5];
        this.passWord = item[6];

    }

}
