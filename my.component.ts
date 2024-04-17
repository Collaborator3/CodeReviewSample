import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ToasterService } from './ToasterService';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  students: any;
  subjects: any;

  constructor(private apiService: ApiService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.apiService.getStudents().subscribe(
      response => this.students = response,
      error => this.toasterService.error(error)
    );
    this.apiService.getSubjects().subscribe(
      response => this.subjects = response,
      error => this.toasterService.error(error)
    );
  }
}
