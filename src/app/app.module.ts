import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoucherComponent } from './voucher/voucher.component';
import { LedgerComponent } from './ledger/ledger.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportComponent } from './report/report.component';
import { CashComponent } from './cash/cash.component';
import { SettingComponent } from './setting/setting.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PurchasesComponent } from './voucher/purchases/purchases.component';
import { SalesComponent } from './voucher/sales/sales.component';
import { PurchasesReturnComponent } from './voucher/purchases-return/purchases-return.component';
import { SalesReturnComponent } from './voucher/sales-return/sales-return.component';
import { PaymentComponent } from './voucher/payment/payment.component';
import { ReceivedComponent } from './voucher/received/received.component';

@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    LedgerComponent,
    InventoryComponent,
    ReportComponent,
    CashComponent,
    SettingComponent,
    DashbordComponent,
    PurchasesComponent,
    SalesComponent,
    PurchasesReturnComponent,
    SalesReturnComponent,
    PaymentComponent,
    ReceivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
