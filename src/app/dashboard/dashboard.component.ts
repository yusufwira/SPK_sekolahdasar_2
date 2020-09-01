import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { UserService } from '../user.service';
import { KriteriaService } from '../kriteria.service';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public sekolah:SekolahService,public eks:EkstrakurikulerService,public user:UserService, public kr:KriteriaService) { }

  jumlahEks="";
  jumlahUser="";
  jumlahKriteria=""
  jumlahSekolah=""
  ngOnInit() {

    this.eks.jumlahEks().subscribe((data) => {                  
      this.jumlahEks = data[0].jumlah;     
    });

    this.user.jumlahUsers().subscribe((data) => {                  
      this.jumlahUser = data[0].jumlah; 
      
    });

    this.kr.jumlahKriteria().subscribe((data) => {                  
      this.jumlahKriteria = data[0].jumlah; 
    
    });

    this.sekolah.jumlahSekolah().subscribe((data) => {                  
      this.jumlahSekolah = data[0].jumlah; 
     
    });
    
  }

}
