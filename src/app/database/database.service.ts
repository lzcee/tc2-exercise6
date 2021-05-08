import { Person } from './../models/Profile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  people: Person[] = [];

  constructor() {}

  addPerson(person: Person): DatabaseService {
    this.people.push(person);
    return this;
  }

  getAllPeople(): Person[] {
    return this.people;
  }

  getPersonByName(name: string): Person {
    return this.people.filter((todo) => todo.name === name).pop();
  }
}
