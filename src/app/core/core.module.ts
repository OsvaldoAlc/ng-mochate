import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialSharedModule
  ],
  declarations: [LoginComponent],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    LoginComponent
  ],
  providers: [AuthService]
})
export class CoreModule { }
