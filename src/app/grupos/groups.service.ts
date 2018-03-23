import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class GroupsService {
    public groupsRef: AngularFirestoreCollection<any>;
    public membersOfGroup;

    constructor( 
        private afs: AngularFirestore, 
        private authService: AuthService 
    )
    {
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

    getGroupDetail( id ) {
        return this.afs.doc(`groups/${id}`).snapshotChanges()
                .map( a => {
                    const data = a.payload.data();
                    return data;
                })
    }

    getGroupMembers( id ) {
        const groupsRef = this.afs.collection('groups').doc(id).collection('members');

        return groupsRef.snapshotChanges().map( actions => {
            return actions.map( a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            })
        });
    }
}
