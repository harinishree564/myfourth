import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { ProductsComponent } from './products/products.component';
import { MobileComponent } from './products/mobile/mobile.component';


const routes: Routes = [
{ path:'home',component:HomeComponent},
{ path:'about',component:AboutComponent},
{ path:'contact',component:ContactComponent},
{ path:'login',component:LoginComponent},
{ path:'password',component:PasswordComponent},
{ path:'products',children:[
  {path:'',component:ProductsComponent},
  { path:'mobile' ,component:MobileComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
