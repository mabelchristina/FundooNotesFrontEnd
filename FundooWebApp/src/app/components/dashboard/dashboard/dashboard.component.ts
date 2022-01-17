import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isExpandable: boolean = false;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({ length: 10 }, () =>
    ``);
  private _mobileQueryListener: () => void;
  viewToggle: boolean = true;
  labels: any;
  searchNotes: any;
 userValues: any;
 labelName:any;

  constructor(
    public route: Router,
    public dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router
  ) {this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
}
view: boolean = false;


ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener); }

  ngOnInit(): void {
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  note() {
    this.route.navigate(['dashboard/note']);
  }
  toggleViews() {
     this.viewToggle = !this.viewToggle;
    
  }

  signout()
  {
    localStorage.removeItem('token')
    this.route.navigateByUrl('/login')
  }

  
  notes() {
    this.router.navigateByUrl('/dashboard/note');
  };

  reminder() {
    this.router.navigateByUrl('/user');
  };

  editlabel() {
    this.router.navigateByUrl('/user');
  };

  archive() {
    this.router.navigateByUrl('/dashboard/archive');
  };

  trash() {
    this.router.navigateByUrl('/dashboard/trash');
  };
  }


