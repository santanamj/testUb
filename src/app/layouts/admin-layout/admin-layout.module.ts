import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPedidosComponent } from 'app/components/pedidos/lista-pedidos/lista-pedidos.component';
import { PedidosComponent } from 'app/components/pedidos/pedidos/pedidos.component';
import { TodoPedidosComponent } from 'app/components/pedidos/todo-pedidos/todo-pedidos.component';
import { Store } from 'app/components/pedidos/pedido.store';
import { PedidosService } from 'app/services/pedidos.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ListaPedidosComponent,
    PedidosComponent,
    TodoPedidosComponent
  ],
  providers:[PedidosService, Store],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AdminLayoutModule {}
