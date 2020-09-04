import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@app/core/core.module';
import { NgxWvnCoreModule } from '@wavenet/ngx-wvn-core';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,

    // Wavenet modules
    NgxWvnCoreModule,

    // App modules
    CoreModule,

    // Routing modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
