import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { NoduleService }     from './nodule.service';
import { NodulesComponent } from './nodule.component';
import { NoduleDetailComponent } from './nodule-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h4>{{title}}</h4>
    <nav>
    <a [routerLink]="['Nodules']">Show Nodules</a>
    </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    NoduleService
  ]
})
@RouteConfig([
  {
    path: '/nodules',
    name: 'Nodules',
    component: NodulesComponent
  },
  {
  path: '/nodule/:id',
  name: 'NoduleDetail',
  component: NoduleDetailComponent
}
])
export class AppComponent {
  title: string = 'Nodules App';
}
