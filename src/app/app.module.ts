import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbStepperModule,NbCardModule,NbSidebarModule, NbThemeModule, NbLayoutModule, NbButtonModule,NbActionsModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { StyleLayoutComponent } from './style-layout/style-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonComponent } from './button/button.component';
import { StepperShowcaseComponent } from './stepper-showcase/stepper-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleLayoutComponent,
    SideBarComponent,
    ButtonComponent,
    StepperShowcaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbSidebarModule,
    NbButtonModule,
    NbActionsModule,
    NbStepperModule,
    NbCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
