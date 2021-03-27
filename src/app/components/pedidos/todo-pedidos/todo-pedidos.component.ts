import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { Pedidos } from 'app/models/pedidos';

import { PedidosService } from 'app/services/pedidos.service';
@Component({
  selector: 'app-todo-pedidos',
  templateUrl: './todo-pedidos.component.html',
  styleUrls: ['./todo-pedidos.component.css']
})
export class TodoPedidosComponent  {
  @Input()
  pedidos: Pedidos[];
  @Input() pedido;
  @Output()
  toggle = new EventEmitter<any>();
  constructor(
    private pedidoService: PedidosService
  ) {}
  toggleItem(index: number, acao: string) {
    const pedido = this.pedidos[index];
    this.pedido = pedido
    this.pedidoService.getPedido(pedido)
    this.toggle.emit({
      pedido: { ...pedido }
    });
    }
  }



