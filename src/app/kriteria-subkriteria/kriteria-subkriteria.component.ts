import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-kriteria-subkriteria',
  templateUrl: './kriteria-subkriteria.component.html',
  styleUrls: ['./kriteria-subkriteria.component.scss'],
})
export class KriteriaSubkriteriaComponent implements OnInit {

  constructor(public kr:KriteriaService,public alertController: AlertController,private route: ActivatedRoute) { }

  public datas:Object
  public namaKriteria:String;
  ngOnInit() {
    var id = this.route.snapshot.params['id'];    
    this.kr.subKriteriaBobot(id).subscribe((data) => {      
      this.datas = data;
      this.namaKriteria = data[0].nama_kriteria;  
    });
    
  }

  perubahan="";
   arr_perubahan = [];
   optionsFn(event:any, kriteria_1:string, kriteria_2:string):void{   
    //  let item = this.perubahan;
     this.perubahan = event.target.value;
     if(this.arr_perubahan.length != 0){
       var check = false;
        for (let i = 0; i < this.arr_perubahan.length; i++) {
          //console.log(this.arr_perubahan[i].crit1)
          if(this.arr_perubahan[i].crit1 == kriteria_1 && this.arr_perubahan[i].crit2 == kriteria_2){
            this.arr_perubahan.splice(i,1,{bobot:this.perubahan, crit1:kriteria_1, crit2:kriteria_2})
            check = true;
            break;
          }
        }
        if(check == false){
          this.arr_perubahan.push({bobot:this.perubahan, crit1:kriteria_1, crit2:kriteria_2})
        }
     }
     else{
      this.arr_perubahan.push({bobot:this.perubahan, crit1:kriteria_1, crit2:kriteria_2})
     }
     
     
  }

  save(){ 
    console.log(this.arr_perubahan)
    var arr_check = Array()
    for(let i = 0; i < this.arr_perubahan.length; i++){
      this.kr.update_subkriteria_bobot(this.arr_perubahan[i].bobot,this.arr_perubahan[i].crit1,this.arr_perubahan[i].crit2).subscribe((data) => {      
        console.log(data)
        this.peringatan('Sukses', 'Data telah terupdate'); 
      }); 
    }
    
  }


  peringatan(headers, data){
    const alert =  this.alertController.create({
     header: headers,
     message: data,
     buttons: [{
      text: 'Okay',
     }]
   }).then(alert=> alert.present());;
  }

}
