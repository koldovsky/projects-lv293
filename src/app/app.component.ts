import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { StudentlistService } from './studentlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ StudentlistService ]
})
export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public students;
  public currStudent;
  public nameFilter = '';

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
      private studentListService: StudentlistService) {
    this.students = studentListService.students;
    this.students.subscribe(result => this.currStudent = result[0]);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  setCurrStudent(student) {
    this.currStudent = student;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
