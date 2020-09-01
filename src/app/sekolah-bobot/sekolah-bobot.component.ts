import { Component, OnInit } from '@angular/core';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-sekolah-bobot',
  templateUrl: './sekolah-bobot.component.html',
  styleUrls: ['./sekolah-bobot.component.scss'],
})
export class SekolahBobotComponent implements OnInit {

  constructor(public sekolah:SekolahService) { }

 
  public datas= [];
  ngOnInit() {
    this.sekolah.GetSekolahBobot().subscribe((data) => {        
      this.datas = data
      console.log(this.datas)
    });
  }

  perubahan="";
   arr_perubahan = [];
   optionsFn(event:any, crit:string, sekolah_1:string, sekolah_2:string):void{   
    //  let item = this.perubahan;
     this.perubahan = event.target.value;
     if(this.arr_perubahan.length != 0){
       var check = false;
        for (let i = 0; i < this.arr_perubahan.length; i++) {
          //console.log(this.arr_perubahan[i].crit1)
          if(this.arr_perubahan[i].sekolah_1 == sekolah_1 && this.arr_perubahan[i].sekolah_2 == sekolah_2){
            this.arr_perubahan.splice(i,1,{bobot:this.perubahan,krteria:crit, sekolah_1:sekolah_1, sekolah_2:sekolah_2})
            check = true;
            break;
          }
        }
        if(check == false){
          this.arr_perubahan.push({bobot:this.perubahan,krteria:crit, sekolah_1:sekolah_1, sekolah_2:sekolah_2})
        }
     }
     else{
      this.arr_perubahan.push({bobot:this.perubahan,kriteria:crit, sekolah_1:sekolah_1, sekolah_2:sekolah_2})
     }
     console.log(this.arr_perubahan)
  }

  save(){ 
    console.log(this.arr_perubahan)
    for(let i = 0; i < this.arr_perubahan.length; i++){
      this.sekolah.update_bobot(this.arr_perubahan[i].bobot,this.arr_perubahan[i].kriteria,this.arr_perubahan[i].sekolah_1,this.arr_perubahan[i].sekolah_2).subscribe((data) => {      
        console.log(data)
      }); 
    }
    
  }

}
