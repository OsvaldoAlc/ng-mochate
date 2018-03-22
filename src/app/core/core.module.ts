import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    Angular2FontawesomeModule,
    MaterialSharedModule
  ],
  declarations: [
    HeaderNavComponent
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    Angular2FontawesomeModule,
    HeaderNavComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }
