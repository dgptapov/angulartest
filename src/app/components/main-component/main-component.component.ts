import { Component, OnInit } from '@angular/core';
import { CatFetcherService } from 'src/app/services/cat-fetcher.service';

import { CatImage } from 'src/app/interfaces/CatImage';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(private catFetcherService: CatFetcherService) { }

  catImages : CatImage[] = []
  targetCat?: CatImage
  

  catostrophicError: boolean = false

  ngOnInit(): void {
    this.catFetcherService.getCatList().subscribe(data => {
      if(data.code || !data.photos || !data.photos.photo) {
        this.handleError()
      } else {
      this.catImages = data.photos.photo
      this.setRandomCat()
      }
    },(err:HttpErrorResponse) =>{
      this.handleError()
    })
  }

  handleError() {
    this.catostrophicError = true
    console.log("CATostrophy")
  }
  setRandomCat() {
     this.targetCat = this.catImages[Math.floor(Math.random()*this.catImages.length)];
  }

}
