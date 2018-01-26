import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {
        path: '', 
        component: PagesComponent,
        children:[
            { path:'', redirectTo:'panel', pathMatch:'full' },
            { path: 'panel', component: BlankComponent , data: { breadcrumb: 'Panel' }  },
            { path: 'usuarios', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'Usuarios' } },
            { path: 'sucursales', loadChildren: 'app/pages/branch/branch.module#BranchModule', data: { breadcrumb: 'Sucursales' } },
            { path: 'seguros', loadChildren: 'app/pages/insurance/insurance.module#InsuranceModule', data: { breadcrumb: 'Ramos' } },
            { path: 'cuenta', loadChildren: 'app/pages/account/account.module#AccountModule', data: { breadcrumb: 'Cuenta' } },
            { path: 'deducibles', loadChildren: 'app/pages/deducibles/deducibles.module#DeduciblesModule', data: { breadcrumb: 'Deducibles' } },
            { path: 'aseguradoras', loadChildren: 'app/pages/aseguradoras/aseguradoras.module#AseguradorasModule', data: { breadcrumb: 'Aseguradoras' } },
            { path: 'empresas', loadChildren: 'app/pages/bussiness/bussiness.module#BussinessModule', data: { breadcrumb: 'Empresas' } },
            { path: 'bancos', loadChildren: 'app/pages/banco/banco.module#BancoModule', data: { breadcrumb: 'Bancos' } },
            { path: 'tasas', loadChildren: 'app/pages/tasa/tasa.module#TasaModule', data: { breadcrumb: 'Tasas' } },
             { path: 'cartas', loadChildren: 'app/pages/carta-accidentes/carta-accidente.module#CartaAccidenteModule', data: { breadcrumb: 'Carta Accidente' } },
            { path: 'pagos', loadChildren: 'app/pages/paymentType/payment-type.module#PaymentTypeModule', data: { breadcrumb: 'Tipos de Pago' } },
             { path: 'presupuestos', loadChildren: 'app/pages/quotes/quotes.module#QuotesModule', data: { breadcrumb: 'Cotizaciones' } },
             { path: 'facturas', loadChildren: 'app/pages/billing/billing.module#BillingModule', data: { breadcrumb: 'Facturas' } },
              { path: 'cartera', loadChildren: 'app/pages/wallet/wallet.module#WalletModule', data: { breadcrumb: 'Cartera' } },
             { path: 'emision', loadChildren: 'app/pages/emision/emision.module#EmisionModule', data: { breadcrumb: 'Derechos de Emision' } },
             { path: 'clientes', loadChildren: 'app/pages/cliente/cliente.module#ClienteModule', data: { breadcrumb: 'Clientes' } },
              { path: 'autos', loadChildren: 'app/pages/autos/auto.module#AutoModule', data: { breadcrumb: 'Autos' } },
            { path: 'polizas', loadChildren: 'app/pages/polizas/poliza.module#PolizaModule', data: { breadcrumb: 'Polizas' } },
            { path: 'siniestros', loadChildren: 'app/pages/siniestro/siniestro.module#SiniestroModule', data: { breadcrumb: 'Siniestros' } },
            { path: 'tipoClientes', loadChildren: 'app/pages/tipoCliente/tipoCliente.module#TipoClienteModule', data: { breadcrumb: 'Tipo de Clientes' } },
            { path: 'renovacion', loadChildren: 'app/pages/renovacion/renovacion.module#RenovacionModule', data: { breadcrumb: 'Renovacion' } },
            { path: 'reportes', loadChildren: 'app/pages/reportes/reportes.module#ReportesModule', data: { breadcrumb: 'Reportes' } },
        
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);