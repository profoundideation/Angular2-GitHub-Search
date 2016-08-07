import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
  private username?: any; // GitHub UserName
  private clientId: any;
  private clientSecret: any;
  private perPage: number;

  constructor(private _http:Http) {
    // this.username = 'profoundhub';
    this.clientId = '0a59ddc213a95ee9adb6';
    this.clientSecret = '655a3af9c98d47e2e7e5c1b6aeed2ad696104c0a';
    this.perPage = 10;
  }

  // Get User's Profile Info
  getUser() {
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.clientId+'&client_secret='+this.clientSecret,)
      .map(res => res.json());
  }

  // Get User's Repos
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?per_page='+this.perPage+'&client_id='+this.clientId+'&client_secret='+this.clientSecret+'&sort=created').map(res => res.json());
  }

  // Update Username
  updateUser(username: any){
    this.username = username;
  }
}
