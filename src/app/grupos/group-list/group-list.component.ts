import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from '../groups.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})

export class GroupListComponent implements OnInit {
  public groups$: Observable<any>;

  constructor(
    private groupService: GroupsService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.groups$ = this.groupService.getUserGroups();
    this.auth.user$.subscribe( (user) => {
      console.log(user);
    });
  }

  addGroup() {
    this.router.navigate(['/group-detail']);
  }

}
