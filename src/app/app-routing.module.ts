import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';

const routes: Routes = [
  { 
    path: '', component: ContainerComponent,
    children: [
      {
      path: 'home', loadChildren: () => 
      import('./pages/home/home.module').then(m => m.HomeModule) 
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
  ]
},
{ 
  path: 'menu', loadChildren: () => 
  import('./pages/menu/menu.module').then(m => m.MenuModule) 
},
{ path: 'login', loadChildren: () => 
  import('./pages/login/login.module').then(m => m.LoginModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
