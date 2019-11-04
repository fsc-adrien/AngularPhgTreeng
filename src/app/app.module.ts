import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import {InMemoryDataService} from './in-memory-data.service';
import { httpInterceptorProviders } from './http-interceptors/index';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HeroesComponent } from './heroes/heroes.component';

import {AuthService} from './auth.service';
import {ConfigComponent} from './config/config.component';
import {DownloaderComponent} from './downloader/downloader.component';
import {HttpErrorHandler} from './http-error-handler.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';
import {PackageSearchComponent} from './package-search/package-search.component';
import {UploaderComponent} from './uploader/uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HttpClientComponent,
    HeroesComponent,
    ConfigComponent,
    DownloaderComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    ),
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'service',
        component: HttpClientComponent,
        // children: [
        //   {
        //     path: 'hero',
        //     component: HeroesComponent,
        //   }
        // ]
      },
    ])
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
