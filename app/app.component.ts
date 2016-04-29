import { Component }       from 'angular2/core';
import { NoduleService }     from './nodule.service';
import { NodulesComponent } from './nodule.component';

@Component({
  selector: 'my-app',
  template: `
    <h4>{{title}}</h4>
    <my-nodules></my-nodules>
  `,
  directives: [NodulesComponent],
  providers: [
    NoduleService
  ]
})
export class AppComponent {
  title = 'Nodules';
}
