import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  public groups$: Observable<any>;
  constructor(private groupService: GroupsService) { }

  ngOnInit() {
    this.groups$ = this.groupService.getUserGroups();
  }

}
