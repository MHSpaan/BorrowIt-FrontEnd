import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    urlRoute;
    url;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    create(entity) {
        this.http.post(this.url, entity).subscribe( () => {
            this.router.navigate([this.urlRoute]);
        });
    }

    getAll() {
        this.getUrl();
        return this.http.get(this.url);
    }

    getById(id: string) {
        return this.http.get(this.url + id);
    }

    delete(id: string) {
        this.http.delete(this.url + id).subscribe( () => {
            this.router.navigate([this.urlRoute]);
        });
    }

    update(entity) {
        this.http.patch(this.url, entity).subscribe( () => {
            this.router.navigate([this.urlRoute]);
        });
    }

    private getUrl() {
        
        this.urlRoute = (this.route.snapshot.firstChild.url[0] + '/');
        this.url = 'api/' + this.urlRoute;
    }

}
