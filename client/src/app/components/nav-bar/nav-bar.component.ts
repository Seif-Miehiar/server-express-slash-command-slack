import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToStaffPrep() {
    window.open('https://rbktunisiastaffprep.herokuapp.com');
  }

  goToCohort3() {
    window.open('https://rbk-tunisia-cohort-3-prep.herokuapp.com/');
  }

  goToCohort4() {
    window.open('https://rbk-tunisia-cohort-4-prep.herokuapp.com/');
  }
}
