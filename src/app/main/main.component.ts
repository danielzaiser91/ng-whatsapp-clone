import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    private session: SessionService
  ) {  }

  ngOnInit(): void {
    if (!this.session.getSession()?.user.isLoggedIn) this.router.navigate(['/login']);
  }

}
