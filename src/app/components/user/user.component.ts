import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.carregaUsuario(params.get('id'));
      },
      error => {
        console.log(error);
      }
    );
  }

  carregaUsuario(userId: string) {
    this.userService.getUser(userId).subscribe(resp => this.user = resp, error => {
      console.log(error);
    });
  }

  getRandom(): number {
    const d = new Date();
    return d.getSeconds();
  }
}
