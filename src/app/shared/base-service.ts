import { BaseClass } from './base-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService<T extends BaseClass> {

    constructor(
        private http: HttpClient,
        private url: string
    ) {
    }

    create(entity: T) {
        this.http.post(this.url, entity).subscribe();
    }

    getAll() {
        return this.http.get(this.url);
    }

    getById(id: string) {
        return this.http.get(this.url + id);
    }

    delete(id: string) {
        this.http.delete(this.url + id).subscribe();
    }

    update(entity: T) {
        this.http.patch(this.url, entity).subscribe();
    }

}
