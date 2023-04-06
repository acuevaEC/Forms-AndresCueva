import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesComponent } from './estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from "../shared/components/form-error-helper/form-error-helper.module";



@NgModule({
    declarations: [
        EstudiantesComponent
    ],
    exports: [
        EstudiantesComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormErrorHelperModule
    ]
})
export class EstudiantesModule { }
