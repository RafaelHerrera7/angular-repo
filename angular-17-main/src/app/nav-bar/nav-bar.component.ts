import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  template: `
    <div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li id="last-button"><a  href="#">Contacto</a></li>
      </ul>
    </div>

  `,
  styles: `
    div {
      position: fixed;
      z-index: 100;
      width: 100%;

      background-color: blue;
  
    }
    ul {
      list-style: none;
      float: left;
      width: 100%;
      margin: 0;  
      padding: 0;
    }

    li {
      float: left;
    }
    a {
      display: block;
      padding: 20px;
      text-decoration: none;
    }
    #last-button {

      float: right;
    }
    
  `
})
export class NavBarComponent {

}
