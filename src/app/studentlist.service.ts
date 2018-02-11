import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Student } from './student';

import 'rxjs/add/operator/map';

@Injectable()
export class StudentlistService {

  constructor(private http: HttpClient) { }

  get students() {
    return this.http.get<Student[]>('assets/student-list.json')
      .map( studentList => studentList
          .filter( student => student.websiteUrl )
          .sort( (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) )
      );
  }

}

