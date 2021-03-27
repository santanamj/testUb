import { Component,  OnInit, OnDestroy } from '@angular/core';
import { PedidosService } from 'app/services/pedidos.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../pedido.store';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html'
})
export class ListaPedidosComponent implements OnInit, OnDestroy {
  listaPedidos$: Observable<any[]>;
  subscription: Subscription
  constructor(
    private pedidoService: PedidosService,
    private store: Store
  ) {
    this.listaPedidos$ = this.store.getPedidos();
    this.subscription = this.pedidoService.getPedidos$.subscribe();   
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit() {
  
  }
 
}
