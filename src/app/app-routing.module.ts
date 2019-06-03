import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { AuthService } from './auth/auth.service';
import { Quiz } from './entities/quiz';
import { QuizComponent } from './quiz/quiz.component';
import { DisplayQuizComponent } from './display-quiz/display-quiz.component';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard], children:[
    {path:'create-quiz', component: CreateQuizComponent  /*canActivate:[AuthGuard]*/},
    {path:'display-all',component:DisplayAllComponent  /*canActivate:[AuthGuard]*/},
    {path:'display-quiz/:id', component:DisplayQuizComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
