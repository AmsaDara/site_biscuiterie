import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service'
@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

  @Input() userInfo:any;
  constructor(
    private authenticateService:AuthenticateService,
    private route:Router) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.authenticateService.logout();

  }

}
