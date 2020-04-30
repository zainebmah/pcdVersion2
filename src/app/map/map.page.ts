import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public searchTerm="";
  public search: Boolean;
  sites = [];
  
  constructor(private siteService : SitesService) {
   }

   ngOnInit(): void {
    this.siteService.getSites().subscribe(
      (sitesFromDb)=>{
        this.sites = sitesFromDb;
        console.log(this.sites);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  filterItems(searchTerm) {
    return this.sites.filter(item => {
      return item.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  
  setFilteredItems() {
    this.sites = this.filterItems(this.searchTerm);
  }
}
