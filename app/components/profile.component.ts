import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    templateUrl: 'app/components/profile.component.html'
})

export class ProfileComponent {
  user?: any[] = [];
  repos?: any[] = [];
  username;

  constructor(private _githubService:GithubService){
    this._githubService.getUser().subscribe(user => {
      this.user = false;
    })

    this._githubService.getRepos().subscribe(repos => {
        this.repos= repos;
    })
  }
}
