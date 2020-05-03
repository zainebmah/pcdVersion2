import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../types' ;
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-site',
  templateUrl: './site.page.html',
  styleUrls: ['./site.page.scss'],
})
export class SitePage implements OnInit {
  siteDetail : any;
  ajoute = false;
  constructor(
    private siteService : SitesService,
    private activatedRoute : ActivatedRoute,
    private userService : UserService
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
  ajout() {
        let json = JSON.stringify(this.siteDetail);
        this.userService.addSite(json).subscribe(
        result => {
        console.log(result);
        this.ajoute=true;
      }) }
  
}
