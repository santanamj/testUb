import { Routes } from '@angular/router';
import { PedidoModule } from './components/pedidos/pedido.module';
import { PedidosComponent } from './components/pedidos/pedidos/pedidos.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: ()=> import('./layouts/admin-layout/admin-layout.module')
      .then(m => m.AdminLayoutModule)
     
  }]},
  {
    path: '',
    component: AdminLayoutComponent,
  children: [
    {path: 'pedidos', component: PedidosComponent,
    loadChildren: ()=> import('./layouts/admin-layout/admin-layout.module')
  .then(m => m.AdminLayoutModule)
}]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
