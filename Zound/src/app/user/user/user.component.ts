import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public currentUser: User;

  @Input() public user: User;

  constructor(authService: AuthService) {
    this.currentUser = authService.currentUserValue;
  }

  ngOnInit(): void {}

  avatar(size: number): string {
    const md5 = new Md5();
    var url: string =
      'https://www.gravatar.com/avatar/' +
      md5.appendStr(this.user.email).end() +
      '?d=identicon&s=' +
      size;
    return url;
  }
}
