import { Component, OnInit } from '@angular/core';
import { faUsers, faClipboardList, faMailBulk, faImages, faMusic, faComments} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUsers = faUsers;
  faClipboardList = faClipboardList;
  faMailBulk = faMailBulk;
  faImages = faImages;
  faMusic = faMusic;
  faComments = faComments;

  isOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleNavbar() {
    this.isOpen = !this.isOpen
  }
}
