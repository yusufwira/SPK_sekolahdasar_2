import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ViewController  } from '@ionic-angular';

@Component({
  selector: 'app-panduan-lokasi',
  templateUrl: './panduan-lokasi.component.html',
  styleUrls: ['./panduan-lokasi.component.scss'],
})
export class PanduanLokasiComponent implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modal.dismiss({
      'dismissed': true
    });
  }

}
