import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './modules/posts/posts.component';
import { PhotosComponent } from './modules/photos/photos.component';
import { TodosComponent } from './modules/todos/todos.component';
import { UsersComponent } from './modules/users/users.component';
import { AlbumsComponent } from './modules/albums/albums.component';
import { CommentsComponent } from './modules/comments/comments.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'comments', component: CommentsComponent},
  {path: '', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
