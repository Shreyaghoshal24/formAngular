import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the username from the route parameters
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }
}
