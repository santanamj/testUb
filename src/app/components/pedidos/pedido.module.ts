import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PedidosService } from "app/services/pedidos.service";
import { DetalhePedidosComponent } from "./detalhe-pedidos/detalhe-pedidos.component";
import { ListaPedidosComponent } from "./lista-pedidos/lista-pedidos.component";
import { Store } from "./pedido.store";
import { PedidosComponent } from "./pedidos/pedidos.component";
import { TodoPedidosComponent } from './todo-pedidos/todo-pedidos.component';

@NgModule({
    declarations:[PedidosComponent, DetalhePedidosComponent, TodoPedidosComponent, ListaPedidosComponent],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports: [],
    providers:[PedidosService, Store],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PedidoModule{}