import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule, MatCheckboxModule, MatExpansionModule, MatRadioModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { QuizComponent } from './quiz/quiz.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { AppState, rootReducer } from './store';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';
import {MatSelectModule } from '@angular/material/select';
import { QuizPipe } from './quiz.pipe';
import { MyQuizesComponent } from './my-quizes/my-quizes.component';
import { UserPipePipe } from './user-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateQuizComponent,
    DisplayAllComponent,
    QuizComponent,
    DisplayQuizComponent,
    QuizPipe,
    MyQuizesComponent,
    UserPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule, MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatCardModule, MatDividerModule, 
    MatExpansionModule, MatCheckboxModule,
    MatRadioModule, MatSelectModule,
    NgReduxModule, NgReduxRouterModule.forRoot(),
    
  ],
  providers: [AngularFirestore, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<AppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(rootReducer, {}, [],[ devTool.isEnabled() ? devTool.enhancer() : f => f]);

     ngReduxRouter.initialize(/* args */);  }
 
 
}
