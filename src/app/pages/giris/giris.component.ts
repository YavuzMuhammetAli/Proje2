import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  giris(){
    this.router.navigateByUrl(`/kayit`).then(r => r.valueOf());
  }
}
