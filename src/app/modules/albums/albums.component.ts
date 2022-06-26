import { Component, OnInit } from '@angular/core';
import { AlbumModel } from './models/album.model';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumsTitle = "Albums";

  albums:AlbumModel[] = []

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(){
    this.albumsService.getAlbumsMethod().subscribe((response) => {
      console.log(response);
      this.albums = response;
    })
  }
}
