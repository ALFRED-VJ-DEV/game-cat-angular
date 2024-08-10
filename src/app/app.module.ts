import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableroComponent } from './Components/ComponentesTablero/tablero/tablero.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiguraTurnoComponent } from './Components/ComponentesTablero/figura-turno/figura-turno.component';
import { ControlNombreTurnoComponent } from './Components/Componente-control-juego/control-nombre-turno/control-nombre-turno.component';
import { NivelJuegoComponent } from './Components/Componente-control-juego/ComponenteControles/nivel-juego/nivel-juego.component';
import { IniciarJuegoComponent } from './Components/Componente-control-juego/ComponenteControles/iniciar-juego/iniciar-juego.component';
import { TerminarJuegoComponent } from './Components/Componente-control-juego/ComponenteControles/terminar-juego/terminar-juego.component';
import { DesacerJugadaComponent } from './Components/Componente-control-juego/ComponenteControles/desacer-jugada/desacer-jugada.component';
import { ControlesMaestroComponent } from './Components/Componente-control-juego/controles-maestro/controles-maestro.component';
import { CasillasComponent } from './Components/ComponentesTablero/casillas/casillas.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent,
    FiguraTurnoComponent,
    ControlNombreTurnoComponent,
    NivelJuegoComponent,
    IniciarJuegoComponent,
    TerminarJuegoComponent,
    DesacerJugadaComponent,
    ControlesMaestroComponent,
    CasillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
