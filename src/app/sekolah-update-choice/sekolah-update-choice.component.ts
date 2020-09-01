import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sekolah-update-choice',
  templateUrl: './sekolah-update-choice.component.html',
  styleUrls: ['./sekolah-update-choice.component.scss'],
})
export class SekolahUpdateChoiceComponent implements OnInit {

  constructor(public alertController: AlertController,private router: Router,private route: ActivatedRoute) { }

  public idsekolah:String;
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.idsekolah = this.route.snapshot.params['id'];
  }

}
