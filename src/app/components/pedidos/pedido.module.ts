import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidosService } from 'app/services/pedidos.service';

import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { Store } from './pedido.store';
import { PedidosRoutingModule } from './pedidos.routing';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TodoPedidosComponent } from './todo-pedidos/todo-pedidos.component';

@NgModule({
    declarations: [PedidosComponent,  TodoPedidosComponent, ListaPedidosComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        PedidosRoutingModule
    ],
    exports: [],
    providers: [Store, PedidosService, { provide: LOCALE_ID, useValue: 'pt' }],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PedidoModule {}