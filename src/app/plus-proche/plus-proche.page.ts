import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-plus-proche',
  templateUrl: './plus-proche.page.html',
  styleUrls: ['./plus-proche.page.scss'],
})
export class PlusProchePage  {

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Je n arrive pas à te localiser!',
      message: ' je ne pourrai pas trouver les sites autour de toi si je ne connais pas ta position ! veuillez activer ta position',
    
      
      buttons:   [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Activer GPS',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ],

    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  
    

  ngOnInit() {

    
  }
  
   
  }



