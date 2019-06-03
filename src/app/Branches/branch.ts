import { BaseClass } from '../shared/base-class';



export class Branch extends BaseClass {
    address;
    country;
    city;
    constructor(item = {}) {
        super();
        this.address = item[0];
        this.country = item[1];
        this.city = item[2];
        this.id = item[3];

    }

}
