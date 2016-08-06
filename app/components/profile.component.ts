import {Component} from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    templateUrl: 'app/components/profile.component.html'
})

export class ProfileComponent {
  constructor(private _githubService:GithubService){
    this._githubService.getUser().subscribe(user => {
      console.log(user);
    })
  }
}
