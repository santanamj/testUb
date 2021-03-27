import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { Store } from './components/pedidos/pedido.store';
import { PedidosService } from './services/pedidos.service';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HistoricoComponent } from './components/historico/historico.component';
import { MeusProdutosComponent } from './components/meus-produtos/meus-produtos.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SuporteComponent } from './components/suporte/suporte.component';
registerLocaleData(ptBr)



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HistoricoComponent,
    MeusProdutosComponent,
    FinanceiroComponent,
    PerfilComponent,
    SuporteComponent

  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [Store, PedidosService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
