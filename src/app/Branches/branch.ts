import { BaseClass } from '../shared/base-class';



export class Branch extends BaseClass {
    address;
    country;
    city;
    
    constructor(item: {}) {
        super();
        this.address = item['address'];
        this.country = item['country'];
        this.city = item['city'];

    }

}
