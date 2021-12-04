import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {InventoryComponent} from './inventory/inventory.component';
import {LedgerComponent} from './ledger/ledger.component';
import {ReportComponent} from './report/report.component';
import {SettingComponent} from './setting/setting.component';
import {VoucherComponent} from './voucher/voucher.component';

const routes: Routes = [
  { path:'dashbord', component:DashbordComponent },
  { path:'inventory', component: InventoryComponent },
  { path:'ledger', component: LedgerComponent },
  { path:'report', component: ReportComponent },
  { path:'setting', component: SettingComponent },
  { path:'voucher/purchases', component: VoucherComponent },
  { path:'voucher/sales', component: VoucherComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
