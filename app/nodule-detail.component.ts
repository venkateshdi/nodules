import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {Nodule} from './nodule';
import { NoduleService }     from './nodule.service';


@Component({
    selector: 'my-nodule-detail',
    templateUrl: 'app/nodule.detail.html'
})
export class NoduleDetailComponent implements OnInit {
    @Input()
    nodule: Nodule;

    constructor(
        private noduleService: NoduleService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.noduleService.getNodule(id)
            .then(nodule => this.nodule = nodule);
    }

    goBack() {
        window.history.back();
    }
}