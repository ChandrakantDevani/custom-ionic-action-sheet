import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {}

  async OpenModel(){
    const presentModel = await this.modalCtrl.create({
      component: ModalpagePage,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
      //custom code
    });
    
    return await presentModel.present();
  }

}
