import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.scss']
})
export class ListarPersonasComponent {
  title = "Lista de Personas"

  lstLibros = new Array()
  libros: any
  displayedColumns: string[] = ['name', 'correo','contraseña'];

  constructor(
    private router: Router,
    private ps : PersonaService
  ){}

  ngOnInit(): void {
    this.loadPersonas()
  }

  loadPersonas(){
    this.libros = this.ps.list()
    this.libros.subscribe((data:any) => {
      console.log("data",data)
      this.lstLibros = data
    })
  }

  goAgregarLibro(){
    this.router.navigate(["persona/create"])
  }
}
