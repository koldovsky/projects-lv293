import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

import { StudentlistService } from './studentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StudentlistService ]
})
export class AppComponent {
  mobileQuery: MediaQueryList; 
  students;
  currStudent;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
    private studentList: StudentlistService) {
    this.students = studentList.students;  
    this.currStudent = this.students[0];
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  setCurrStudent(student) {
    this.currStudent = student;
  }

  
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
