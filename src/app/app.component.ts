import {Component, OnInit} from '@angular/core';
import {GithubGetService} from './github-get.service';
import {IGithubResult, IUser} from './IGithubResult';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {AppMode} from './AppMode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private github: GithubGetService
  ) {}
  public appMode: AppMode;
  public logo = require('./logo.svg');
  public users: IUser[] = [];
  public inpRx: FormControl;
  ngOnInit(): void {
    this.appMode = AppMode.Normal;
    this.inpRx = new FormControl('');
    this.inpRx.valueChanges
      .debounceTime(500)
      .filter((val) => (val.length > 2))
      .subscribe((value: string) => {
        this.searchUsers(value);
    });
  }
  public isLoading(): boolean {
    return this.appMode === AppMode.Loading;
  }
  public isError(): boolean {
    return this.appMode === AppMode.Error;
  }
  public searchUsers(str: string): void {
    this.users = [];
    this.appMode = AppMode.Loading;
    this.github.getUsersFromGithub(str)
      .subscribe((result: IGithubResult) => {
        this.appMode = AppMode.Normal;
        console.log(result);
        if (result && result.items) {
          this.users = result.items;
        }
      },
        () => {
          this.appMode = AppMode.Error;
        });
  }
}
