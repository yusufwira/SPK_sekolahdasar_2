import { Component, OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public appPages = [];
  activeMenu: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    public events: Events
  ) {
    this.initializeApp();

  }

  nama:string;
  public username ="";
  public photo ="";
  public img ="";
  public hak = "";

  
  ngOnInit():void {
    this.appPages= [
      {
        title: 'Halaman Utama',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'logo-buffer'
      },
      {
        title: 'Daftar Sekolah Dasar',
        url: '/daftarsekolah',
        icon: 'list-outline'
      },
      {
        title: 'Pemilihan Sekolah Dasar',
        url: '/spk',
        icon: 'cog'
      },
      {
        title: 'Keluar',
        url: '/login',
        icon: 'log-out'
      }
    ];


    this.events.subscribe('user:created', (user, nama, foto, hak) => {
      console.log(user);
      this.nama = nama;
      this.username = user;
      this.photo = foto;
      this.hak = hak;
      this.img = "http://localhost/ta_backend/Auth/profile/"+this.username+"/"+ this.photo
      console.log(hak)
      if(hak == "parent"){
        this.ngOnInit();
        this.appPages.splice(1, 1);
      }
      else if(hak == "admin_sekolah"){
        this.ngOnInit();
        this.appPages.splice(1, 1,{
          title: 'Dashboard',
          url: '/sekolah-admin',
          icon: 'logo-buffer'
        });
      }
      else{
        this.ngOnInit();
      }
      });
      
      
    
  }

 


   initializeApp():void {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //localStorage['username'] =0;
      this.nama = localStorage['nama'];
      this.username = localStorage['username'];
      this.photo = localStorage['photo'];
      this.img = "http://localhost/ta_backend/Auth/profile/"+this.username+"/"+localStorage['photo']
      this.hak = localStorage['hak_akses'];
      if(this.hak == "parent"){
        this.appPages.splice(1, 1);
      }
      else if(this.hak == "admin_sekolah"){
        this.appPages.splice(1, 1,{
          title: 'Dashboard',
          url: '/sekolah-admin',
          icon: 'logo-buffer'
        });
      }
      else{
        this.ngOnInit();
      }
    
    });
    //this.initializeApp();
  }


  menu1Active() {
    this.activeMenu = 'menu1';   
    this.menu.enable(false, 'menu2');
    console.log('a')
  }
}
