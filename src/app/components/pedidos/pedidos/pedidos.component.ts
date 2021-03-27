import { Component, Input, OnInit } from '@angular/core';
import { ListaPedidosComponent } from '../lista-pedidos/lista-pedidos.component';
import { Pedidos } from 'app/models/pedidos';
import { PedidosService } from 'app/services/pedidos.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @Input()  pedidos: Pedidos[];
  @Input()pedido: Pedidos;
  constructor() { }

  ngOnInit(): void {
  }

}
