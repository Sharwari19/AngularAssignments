import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
  providers:[FormBuilder, Validators]
})
export class PersonalInfoComponent 
{
  constructor(private formObj : FormBuilder)
  {

  }

  MarvellousForm = this.formObj.group(
    {
      firstName : ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastName : ['', Validators.required],
      email : ['', [Validators.required, Validators.pattern('[/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/]')]],
      phone : ['', [Validators.required, Validators.pattern('[0-9]*')]],
      city : ['', Validators.required],
      state: [''],
      ZIPcode : ['',[Validators.maxLength(5), Validators.pattern('[0-9]*')]],
      comments : ['', Validators.minLength(30)]



    }

  )

}
