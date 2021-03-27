import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'app/services/pedidos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhe-pedidos',
  templateUrl: './detalhe-pedidos.component.html',
  styleUrls: ['./detalhe-pedidos.component.css']
})
export class DetalhePedidosComponent implements OnInit {
  subscription: Subscription;
  pedido;
  constructor(
    private pedidoService: PedidosService
  ) {
    this.subscription = this.pedidoService.currentMessage.subscribe((data: any) => {
      this.pedido = data;
      console.log(data)
    })
   }
  ngOnInit(): void {
    
  }

}
