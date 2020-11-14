import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpkService {
  private header = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) { }
 
  proses_ahp(arr_kriteria,arr_sekolah,arr_jarak ):Observable<any>{
    let body = new HttpParams();
    let testData:FormData = new FormData();
    testData.append('nama',JSON.stringify(arr_kriteria)); 
    testData.append('sekolah', JSON.stringify(arr_sekolah)); 
    testData.append('jarak', JSON.stringify(arr_jarak)); 
    return this.http.post<any>
    ("http://localhost/spk_backend/proses_hasil_5.php", testData);
  }

  proses_ahp_all(arr_kriteria, arr_jarak):Observable<any>{
    let body = new HttpParams();
    let testData:FormData = new FormData();
    testData.append('nama',JSON.stringify(arr_kriteria));     
    testData.append('jarak', JSON.stringify(arr_jarak));
    return this.http.post<any>
    ("http://localhost/spk_backend/proses_hasil_5_all.php", testData);
  }

  reset_bobot(){
    return this.http.get("http://localhost/revisi_ta/kriteria/reset_bobot_kritera.php");
  }

  Coba(coba):Observable<any> {
    return this.http.post("http://localhost/spk_backend/coba_hasil.php", coba, { headers: this.header });
  }
}
