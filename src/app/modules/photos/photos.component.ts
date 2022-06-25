import { Component, OnInit } from '@angular/core';
import { PhotoModel } from './models/photo.model';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


  photosTitle = "Photos"

  photos:PhotoModel[] = [];

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(){
    this.photosService.getPhotosMethod().subscribe((response) => {
      console.log(response);
      this.photos = response;
    })
  }
}
