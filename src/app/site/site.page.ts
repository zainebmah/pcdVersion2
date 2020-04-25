import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs' ;
import { Site } from '../types';
import { SitesService } from '../services/sites.service';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
  siteDetail : any;
  constructor(
    private siteService : SitesService,
    private activatedRoute : ActivatedRoute
  ) { 
    let SITEID = this.activatedRoute.snapshot.paramMap.get('id');
    this.siteDetail=this.siteService.getSite(SITEID);
    this.siteService.getSite(SITEID).subscribe(
      (sitesFromDb)=>{
        this.siteDetail = sitesFromDb;
      }
    )
  }

  ngOnInit() {
  }

}
