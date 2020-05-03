import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
   userDetail : any;
   sites = [] ;
    constructor(
      private userService : UserService,
      private activatedRoute : ActivatedRoute ) { 
        let userId = this.activatedRoute.snapshot.paramMap.get('userId');
        this.userService.getUser('2').subscribe(
          (userFromDb)=>{
        this.userDetail = userFromDb;
        this.sites = userFromDb.sites;
        console.log(this.userDetail);
      
      }
      ,
      error => console.log(error)
    )
}
    
   

    ngOnInit() {
   }
   
  

    
     
    
    
  }

  


