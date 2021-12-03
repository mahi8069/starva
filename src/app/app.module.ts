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

@NgModule({
  declarations: [
    AppComponent,
    VoucherComponent,
    LedgerComponent,
    InventoryComponent,
    ReportComponent,
    CashComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
