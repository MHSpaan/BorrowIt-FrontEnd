import { Component} from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { Branch } from '../branch';
import { IndexComponent } from 'src/app/shared/index/index.component';

@Component({
  selector: 'app-index-branches',
  templateUrl: './index-branches.component.html',
  styleUrls: ['./index-branches.component.css']
})
export class IndexBranchesComponent extends IndexComponent {
  
  headers = Object.getOwnPropertyNames(new Branch());
  title = "branches";

  constructor(
    httpService: HttpService) {
    super(httpService);

  }
}
