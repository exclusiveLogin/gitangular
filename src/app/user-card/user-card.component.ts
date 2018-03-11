import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../IGithubResult';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public props: IUser;
  public avatarSafeString: SafeStyle;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.avatarSafeString = this.sanitizer.bypassSecurityTrustStyle('url(' + this.props.avatar_url + ')');
  }
}
