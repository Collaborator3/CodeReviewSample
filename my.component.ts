import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {
  students: any;
  subjects: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Separate multiple HTTP requests
    this.apiService.getStudents().subscribe(
      response => {
        this.students = response; // Handle students here
      }, error => {
        // Handle errors
      }
    );

    this.apiService.getSubjects().subscribe(
        response => {
          this.subjects = response; // Handle subjects here
        }, error => {
          // Handle errors
        }
    );
  }
}
