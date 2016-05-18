import {Component, OnInit} from 'angular2/core';
import {Nodule} from './nodule';
import {NoduleService} from './nodule.service';

@Component({
    selector: 'my-nodules',
    templateUrl: 'app/nodule.list.html',
    styles:[`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .nodules {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
    display:inline;
  }
  .nodules li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .nodules li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .nodules li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .nodules .text {
    position: relative;
    top: -3px;
  }
  .nodules .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class NodulesComponent implements OnInit {
    title: string = "Nodules List";
    nodules: Nodule[] = [];
    selectedNodule: Nodule;
    
    constructor(private _noduleService: NoduleService) {        
    }
    
    ngOnInit() {
        this.getNodules();
    }
    
    onselect(nodule: Nodule) {
        this.selectedNodule = nodule;    
    }
    
    getNodules(): void {
        let promise: any = this._noduleService.getNodules();
        promise.then(nodules => this.nodules = nodules);
    }
 }
