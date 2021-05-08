import { DatabaseService } from './../../database/database.service';
import { Person } from './../../models/Profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit {
  constructor(private databaseService: DatabaseService) {}

  people: Person[] = [];
  selectedPerson: Person;

  getAllPeople(): void {
    this.people = this.databaseService.getAllPeople();
  }

  getPersonByName(name: string): void {
    this.selectedPerson = this.databaseService.getPersonByName(name);
  }

  clearPerson() {
    this.selectedPerson = null;
  }

  ngOnInit(): void {
    this.getAllPeople();
  }
}
