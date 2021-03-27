import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',          title: 'Inicio',             icon:'',       class: '' },
    { path: '/pedidos',          title: 'Pedidos',           icon:'',       class: '' },
    { path: '/historico',          title: 'Histórico',          icon:'',       class: '' },
    { path: '/meus-produtos',          title: 'Meus produtos',        icon:'',    class: '' },
    { path: '/financeiro',          title: 'Financeiro',         icon:'',      class: '' },
    { path: '/perfil',          title: 'Meu perfil',       icon:'',    class: '' },
    { path: '/suporte',          title: 'suporte',      icon:'',  class: '' },
  
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
