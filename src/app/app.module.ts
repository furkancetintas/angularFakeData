import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CommentsComponent } from './modules/comments/comments.component';
import { AlbumsComponent } from './modules/albums/albums.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { TodosComponent } from './modules/todos/todos.component';
import { UsersComponent } from './modules/users/users.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { UserFilterPipe } from './modules/users/user-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    UserFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
