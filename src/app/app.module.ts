import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/authguard.service';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'login-reactive', component: LoginReactiveComponent },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
    ])
  ],
  providers: [
    PostService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
