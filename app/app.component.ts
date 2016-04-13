import {Component} from 'angular2/core';
import {Nodule} from './Nodule';
import {NoduleService} from './nodule.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/nodule.list.html'
})
export class AppComponent {
    title: "Nodules App";
    nodules: Nodule[];
 }
