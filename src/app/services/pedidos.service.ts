import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Pedidos } from 'app/models/pedidos';
import { tap } from "rxjs/operators";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Store } from 'app/components/pedidos/pedido.store';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  
  private pedido = new BehaviorSubject('teste');
  currentMessage = this.pedido.asObservable();
  constructor(
    private http: HttpClient,
    private store: Store
  ) { 
  
  }
  
  getPedidos$: Observable<Pedidos[]> = this.http
    .get<Pedidos[]>('http://localhost:3000/pedidos')
    .pipe(
      tap(next => this.store.set('listPedidos', next))
    )
    getTodoList(id): Observable<Pedidos> {
      return this.http.get<Pedidos>(`http://localhost:3000/todolist/ + ${id}`, )
     }
    
     getPedido(pedido) {
       console.log(pedido)
      this.pedido.next(pedido)
  }
  
}
