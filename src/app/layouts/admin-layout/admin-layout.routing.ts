import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { HistoricoComponent } from 'app/components/historico/historico.component';
import { MeusProdutosComponent } from 'app/components/meus-produtos/meus-produtos.component';
import { FinanceiroComponent } from 'app/components/financeiro/financeiro.component';
import { PerfilComponent } from 'app/components/perfil/perfil.component';
import { SuporteComponent } from 'app/components/suporte/suporte.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'historico',           component: HistoricoComponent },
    { path: 'meus-produtos',          component: MeusProdutosComponent },
    { path: 'financeiro',     component: FinanceiroComponent },
    { path: 'perfil',          component: PerfilComponent },
    { path: 'suporte',           component: SuporteComponent }
];
