import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { kayit } from '../models/kayit';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http: HttpClient) { }
  baseUrl ="https://demo.bussion.com/api/V3/";
  kayitOlustur(veri: kayit){
    const insertBody = {
      "Token": this.getToken(),
      "DataStoreId": "63285857827766154376",
      "Operation": "insert",
      "Encrypted":1951,
      "Data": "INSERT INTO public.ariza_table (marka, model, ariza, adres, email, tel_no, tarih, aciklama, sla_tipi, seri_no, sikayet, sla_turu) VALUES('', '', '', '', '', 0, now(), '', '', '', '', '')"
    }

    return this.http.post(this.baseUrl + 'Applications/DataOps',   insertBody).pipe(
      map((response: any) => {
        return response.message
      })
    );
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
