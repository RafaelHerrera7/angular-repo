import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Contenido1Component } from './contenido-1/contenido-1.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, NavbarComponent, Contenido1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Santiago';
}
