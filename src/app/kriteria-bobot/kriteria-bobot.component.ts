import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kriteria-bobot',
  templateUrl: './kriteria-bobot.component.html',
  styleUrls: ['./kriteria-bobot.component.scss'],
})
export class KriteriaBobotComponent implements OnInit {

  constructor(public kr:KriteriaService,public alertController: AlertController) { }

  public datas:Object
  ngOnInit() {
    this.kr.tampil_bobot().subscribe((data) => {      
      this.datas = data;  
      console.log(data)   
    });
  }


  key = "";
  inputKey(event:any) {    
    this.key = event.target.value; 
    this.kr.search_bobot(this.key).subscribe((data) => {      
      this.datas = data;   
      console.log(data)    
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
      this.kr.update_bobot(this.arr_perubahan[i].bobot,this.arr_perubahan[i].crit1,this.arr_perubahan[i].crit2).subscribe((data) => {      
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
