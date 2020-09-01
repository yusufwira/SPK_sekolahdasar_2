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
 
  proses_ahp(arr_kriteria,arr_sekolah ):Observable<any>{
    let body = new HttpParams();
    let testData:FormData = new FormData();
    testData.append('nama',JSON.stringify(arr_kriteria)); 
    testData.append('sekolah', JSON.stringify(arr_sekolah)); 
    return this.http.post<any>
    ("http://localhost/spk_backend/proses_hasil_2.php", testData);
  }

  Coba(coba):Observable<any> {
    return this.http.post("http://localhost/spk_backend/coba_hasil.php", coba, { headers: this.header });
  }
}
