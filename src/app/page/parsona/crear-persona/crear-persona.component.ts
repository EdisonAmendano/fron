import { Component } from '@angular/core';
import { Persona } from 'src/app/Domine/personas';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.scss']
})
export class CrearPersonaComponent {
  title = "Registrarse"
  res =""
  r = ""
  p: Persona = new Persona()

  constructor(
    private router: Router,
    private ps: PersonaService,
  ){}

  ngOnInit(): void {

  }

  guardar(){    
    console.log(this.p)
    this.ps.save(this.p)
    .subscribe(res=>{
      console.info('Registro guardado')
    })
    this.p = new Persona()
  }

  goList(){
    this.router.navigate(["persona/list"])
  }
}
