import { Pedidos } from "app/models/pedidos";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
export interface State {
    listPedidos: Pedidos[];    
}
const state: State = {
    listPedidos: []    
}
export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value(){
        return this.subject.value
    }
    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        })
    }
    public getPedidos(): Observable<Pedidos[]>{
        return this.store.pipe(map(store => store.listPedidos))
    }
    
    
}