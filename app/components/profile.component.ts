import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GitHubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    templateUrl: 'app/components/profile.component.html'
})

export class ProfileComponent {
  user?: boolean;
  repos?: any[] = [];
  username?: any[];

  constructor(private _githubService:GitHubService){
    this.user = false;
  }

  searchUser() {
    // Update UserName(s)
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
}
