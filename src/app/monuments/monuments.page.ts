import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { ActivatedRoute } from '@angular/router';
import { Monument } from '../types';
@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss'],
})
export class MonumentsPage implements OnInit {

  monuments = [];
  image : string;
  titre : string;
  constructor(
    private siteService : SitesService,
    private activatedRoute : ActivatedRoute
  ) { 
    let MONID = this.activatedRoute.snapshot.paramMap.get('id');
    this.siteService.getMonuments(MONID).subscribe(
      res => {
        this.monuments = res; 
        console.log(this.monuments) ;    
      },
      err => console.log(err)

    
    )
  }

  ngOnInit() {
  }

}
