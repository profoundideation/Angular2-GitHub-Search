import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username?: any; // GitHub UserName

  constructor(private _http:Http) {
    // this.username = 'profoundhub';
  }

  // Get User's Profile Info
  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username)
      .map(res => res.json());
  }

  // Get User's Repos
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
      .map(res => res.json());
  }

  // Update Username
  updateUser(username){
    this.username = username;
  }
}
