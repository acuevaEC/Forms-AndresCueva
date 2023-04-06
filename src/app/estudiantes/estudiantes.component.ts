import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudianteForm: FormGroup;
  estudiantes: any[] = [];

  nombreControl = new FormControl('',[
    Validators.required,
    Validators.minLength(3)
    ]);

  apellidoControl = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
  ]);

  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    
  ]);

  emailConfirmaControl = new FormControl('',[
    Validators.required,
    Validators.email,
    this.MustMatch('_', '_')
  ]
  );

  constructor(){
    
    this.estudianteForm = new FormGroup({
      nombre:this.nombreControl,
      apellido:this.apellidoControl,
      email:this.emailControl,
      emailConfirma:this.emailConfirmaControl,
    }
    )

  }
  
  get f() { return this.estudianteForm.controls; }


  onsubmmit(): void{
    if (this.estudianteForm.valid) {
      this.estudiantes.push(this.estudianteForm.value);
      this.estudianteForm.reset();
    } else {
      this.estudianteForm.markAllAsTouched()
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (group: AbstractControl) => {
        const control =this.emailConfirmaControl ;
        const matchingControl = this.emailControl;

        if (!control || !matchingControl) {
          console.log(control?.value+"      "+matchingControl?.value);
          return null;
        }

        if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          //console.log('otro error previo');  
          return null;
        }
        
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
            //console.log('diferentes'); 
        } else {
            matchingControl.setErrors(null);
           //console.log('iguales'); 
        }
        return null;
    }
}


}
