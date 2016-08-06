import {Component} from '@angular/core';
import {ProfileComponent} from './components/profile.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[ProfileComponent]
})
export class AppComponent { }
