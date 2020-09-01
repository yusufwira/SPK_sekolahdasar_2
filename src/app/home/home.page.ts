import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ThemeService } from '../theme.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

const themes = {
  night:{
    primary:'#8CBA80',
    secondary:'#FCFF6C',
    tertiary:'#FE5F55',
    medium:'#BCC2C7',
    dark:'#F7F7FF',
    light:'#495867'
  }
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu: MenuController, public theme:ThemeService,public user:UserService,public alertController: AlertController, private router: Router) {}


  ngOnInit():void {
  	if(localStorage['username'] == 0){  
  		this.router.navigate(['/login'])
  	}
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

 

}
