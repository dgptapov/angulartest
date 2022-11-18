import { Component, OnInit, Input } from '@angular/core';
import { CatFetcherService } from 'src/app/services/cat-fetcher.service';
import { CatImage } from 'src/app/interfaces/CatImage';

import data from 'src/app/constants/data';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.css']
})
export class CatItemComponent implements OnInit {
  @Input() targetCat?: CatImage;


  get catUrl(){
    let url = ""
    if(this.targetCat) {
      url = data.imageUrl + this.targetCat.server + '/' + this.targetCat.id + '_' + this.targetCat.secret + data.postfix
    }
      return url
    
  }

  constructor(private catFetcherService: CatFetcherService) { }


  ngOnInit(): void {
  }

}
