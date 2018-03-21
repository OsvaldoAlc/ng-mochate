import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    FlexLayoutModule
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
