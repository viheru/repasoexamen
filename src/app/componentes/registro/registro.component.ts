import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }


}

