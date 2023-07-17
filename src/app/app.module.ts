import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MsalmoduleserviceService } from './shared/msalmodule.service';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'layout',
    component: LayoutComponent,
    canActivate: [MsalGuard],
    children: [
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full',
      },

      {
        path: 'data',
        loadChildren: () =>
          import('./datasharing/datasharing.module').then(
            (m) => m.DatasharingModule
          ),
      },

      {
        path: 'rxjs',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        loadChildren: () =>
          import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
      },
      {
        path: 'databinding',
        loadChildren: () =>
          import('./databinding/databinding.module').then(
            (m) => m.DatabindingModule
          ),
      },
      {
        path: 'reactiveforms',
        loadChildren: () =>
          import('./reactiveforms/reactiveforms.module').then(
            (m) => m.ReactivefromsModule
          ),
      },
      {
        path: 'topics',
        loadChildren: () =>
          import('./topics/topics.module').then((m) => m.TopicsModule),
      },
      {
        path: 'javascript',
        loadChildren: () =>
          import('./javascript/javascript.module').then(
            (m) => m.JavascriptModule
          ),
      },
      
      {
        path: 'template',
        loadChildren: () =>
          import('./template/template.module').then(
            (m) => m.TemplateModule
          ),
      },
  
  { path: 'home', component: HomeComponent },
    ],
  },
];
const mainModule: NgModule = {
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent],
};

const msalModuleService = new MsalmoduleserviceService();
msalModuleService.addMsal(mainModule);

@NgModule({
  declarations: mainModule.declarations,
  imports: mainModule.imports,
  providers: mainModule.providers,
  bootstrap: mainModule.bootstrap,
})
export class AppModule {}
