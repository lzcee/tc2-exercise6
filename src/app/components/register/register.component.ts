import { DatabaseService } from './../../database/database.service';
import { Person } from './../../models/Profile';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private databaseService: DatabaseService) {}

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  registerFormMessage: string;
  person: Person;

  onSubmit() {
    if (!this.registerForm.invalid) {
      this.person = this.registerForm.value;
      if (!this.databaseService.getPersonByName(this.person.name)) {
        if (!this.person.image) {
          this.person.image = 'https://thispersondoesnotexist.com/image';
        }
        this.databaseService.addPerson(this.person);
        this.registerForm.reset();
        this.registerFormMessage = '';
      } else {
        this.registerFormMessage = 'Pessoa já cadastrada.';
      }
    } else {
      this.registerFormMessage = 'Campos preenchidos incorretamente!';
    }
  }
}
