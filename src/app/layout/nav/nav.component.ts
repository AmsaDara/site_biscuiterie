import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticateService } from '../../user/authenticate/authenticate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentUser?: any;
  subscription?:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result:any) => result.matches),
      map((result: any) => result.matches),
      shareReplay()
    );
  
    constructor(
      private breakpointObserver: BreakpointObserver,
      private authenticationService: AuthenticateService
    ) { }
  
  
    ngOnInit(): void {
      this.subscription= this.authenticationService.currentUser$.subscribe({
        next: (user) => {
          this.currentUser = user
        }
      })
    }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }

}
