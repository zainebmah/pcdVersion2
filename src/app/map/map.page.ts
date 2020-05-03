import { Component, OnInit } from '@angular/core';
import { SitesService } from '../services/sites.service';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  public searchTerm="";
  public search: Boolean;
  sites = [];
  map: Map;
  propertyList = [];
  constructor(private siteService : SitesService, private router : Router) {
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
  
  ionViewDidEnter() {
    this.map = new Map('mapId3').setView([35.982,9.915], 8);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(this.map);
    

    fetch('./assets/data.json').then(res => res.json())
    .then(json => {
      this.propertyList = json.properties;
      this.leafletMap();
    });
  }

  leafletMap() {
    const customMarkerIcon = icon({
      iconUrl: './assets/custom-marker-icon.png',
      iconSize: [54, 54], 
      popupAnchor: [0, -20]
    });
    for (const property of this.propertyList) {
      marker([property.lat, property.long], {icon: customMarkerIcon}).addTo(this.map)
        .bindPopup((property.city), { autoClose: false }).on('click', () => this.router.navigate(['/site', property.id])).addTo(this.map)
        .openPopup(); 
    }
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
