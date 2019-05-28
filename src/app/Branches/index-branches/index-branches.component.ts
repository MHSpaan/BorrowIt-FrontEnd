import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch.service';
import { Branch } from '../branch';

@Component({
  selector: 'app-index-branches',
  templateUrl: './index-branches.component.html',
  styleUrls: ['./index-branches.component.css']
})
export class IndexBranchesComponent implements OnInit {
  branches;
  constructor(private branchService: BranchService) {
    branchService.getBranches();

  }

  ngOnInit() {

  }



}
