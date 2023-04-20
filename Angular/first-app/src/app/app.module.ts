import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AppRoutingModule } from './app.routing.module';
import { PaiComponent } from './components/input-output/pai/pai.component';
import { FilhoComponent } from './components/input-output/pai/filho/filho.component';
import { DirectivaPaiComponent } from './components/directivas/directiva-pai/directiva-pai.component';
import { NgIfComponent } from './components/directivas/ng-if/ng-if.component';
import { NgForComponent } from './components/directivas/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgClassStyleComponent } from './components/directivas/ng-class-style/ng-class-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataBindingComponent,
    PaiComponent,
    FilhoComponent,
    DirectivaPaiComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassStyleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
