import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KriteriaService {

  constructor(private http: HttpClient) { }

  nama="";
  inputKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/insert.php?nama="+this.nama);
  }

  dataKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/tampil.php");
  }

  deleteKriteria(id){
    return this.http.get("http://localhost/ta_backend/kriteria/delete.php?id="+id);
  }

  jumlahKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/jumlah.php?");
  }


  tampil_bobot(){
    return this.http.get("http://localhost/ta_backend/kriteria/tampil_bobot.php");
  }

  search_bobot(key:string){
    return this.http.get("http://localhost/ta_backend/kriteria/search_bobot.php?key="+key);
  }

  update_bobot(bobot:string, crit1:string, crit2:string):Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('bobot', bobot); 
    Data.append('crit1',crit1 ); 
    Data.append('crit2',crit2 ); 
    return this.http.post<any>
    ("http://localhost/ta_backend/kriteria/update_bobot.php", Data);
  }



  //revisi
  detail_kriteria(){
    return this.http.get("http://localhost/revisi_ta/kriteria/kriteria_detail.php");
  }
  
}
