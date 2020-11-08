import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kriteria-bobot-user',
  templateUrl: './kriteria-bobot-user.component.html',
  styleUrls: ['./kriteria-bobot-user.component.scss'],
})
export class KriteriaBobotUserComponent implements OnInit {

  constructor(public kr:KriteriaService,public alertController: AlertController, private route: ActivatedRoute) { }
  
  public datas:any =[];
  public arr_id = [];
  ngOnInit() {
    var id = this.route.snapshot.params['data'];
    var ids = id.replace(",", "");
    
    for (let i = 0; i < ids.length; i++) {      
      this.arr_id.push(ids[i])
    }

    console.log( this.arr_id);
    
    this.kr.tampil_bobot_user(this.arr_id).subscribe((data) => {      
      // this.datas = data;  
      // console.log(data)   
      this.filter(data);
    });
  }

  filter(data){
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < this.arr_id.length; j++) {
        if (data[i].idkriteria_1 ==  this.arr_id[j]) {
          this.datas.push(data[i])
        }
        
      }
      
    }
    console.log(this.datas)
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
