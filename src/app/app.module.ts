import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { LoginComponent } from './componentes/login/login.component';

import { FormsModule } from '@angular/forms';
import { PersonaService } from './servicios/persona.service/persona.service';
import { EducacionService } from './servicios/educuacion.service/educacion.service';
import { ExplaboralService } from './servicios/explaboral/explaboral.service';
import { SkillService } from './servicios/skills/skill.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMiComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PersonaService,
    EducacionService,
    ExplaboralService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
