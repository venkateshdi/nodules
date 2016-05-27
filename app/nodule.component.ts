import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {Nodule} from './nodule';
import { NoduleDetailComponent } from './nodule-detail.component';

import {NoduleService} from './nodule.service';

@Component({
  selector: 'my-nodules',
  templateUrl: 'app/nodule.list.html',
  directives: [NoduleDetailComponent]
})
export class NodulesComponent implements OnInit {
  title: string = "Nodules List";
  nodules: Nodule[] = [];
  selectedNodule: Nodule;
  useMock: Boolean;

  constructor(
    private router: Router,
    private noduleService: NoduleService,
    private useMockData: Boolean) {

    this.useMock = useMockData;
  }

  ngOnInit() {
    this.getNodules();
  }

  onselect(nodule: Nodule) {
    this.selectedNodule = nodule;
  }

  getNodules(): void {
    let promise: any = this.noduleService.getNodules(this.useMock||false);
    promise
      .then(nodules => this.nodules = nodules)
      .catch(console.log('No items found'));
  }

  gotoDetail() {
    this.router.navigate(['NoduleDetail', { id: this.selectedNodule.id }]);
  }

}

