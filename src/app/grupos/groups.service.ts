import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class GroupsService {

  public groupsRef: AngularFirestoreCollection<any>;
  // public groups$: Observable<any>;
  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.groupsRef = this.afs.collection('groups', ref => ref.where('userId', '==', user.uid));
    });
  }

  getUserGroups() {
    return this.groupsRef.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
