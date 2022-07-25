import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { GirisComponent } from './pages/giris/giris.component';
import { KayitComponent } from './pages/kayit/kayit.component';
import { OperatorComponent } from './pages/operator/operator.component';

const routes: Routes = [
  {path:'',component:GirisComponent},
  { path: 'kayit', component: KayitComponent },
  {path:'admin',component:AdminComponent},
  {path:'operator',component:OperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
