import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-result',
  templateUrl: './image-result.component.html',
  styleUrls: ['./image-result.component.css']
})
export class ImageResultComponent implements OnInit {

  imgProcessed = "assets/image.png";
  constructor() { }

  ngOnInit() {
  }

}
