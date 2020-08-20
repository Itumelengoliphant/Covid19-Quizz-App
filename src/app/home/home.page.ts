import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: any = {};
  x:number = 0;
  setStatus:string;


  constructor(public alertController: AlertController)
  {
    
  }

  async presentAlert(score: number,name:string, status: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Covid Assessment Results',
      subHeader: `Score for ${name}`,
      message: `Your score is ${score}/5: Therefore you have ${status}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  submit(){

    if(this.user.response == 'Corona Virus Disease 2019'){
      this.x++;
    }

    if(this.user.answer == 'Your face'){

      this.x++;
    }

    if(this.user.symptom == 'Itchiness'){
      this.x++;
    }

    if(this.user.wash == '20s'){
      this.x++;
    }

    if(this.user.dispose == 'Put in bin or flush'){
      this.x++;
    }

    if(this.x <4){
      this.setStatus = 'Failed. Please retry'
    }else{
      this.setStatus = 'Quizz Passed'
    }

    this.presentAlert(this.x,this.user.name,this.setStatus);
  }

  
}

