import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPedidosComponent } from './todo-pedidos.component';

describe('TodoPedidosComponent', () => {
  let component: TodoPedidosComponent;
  let fixture: ComponentFixture<TodoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
