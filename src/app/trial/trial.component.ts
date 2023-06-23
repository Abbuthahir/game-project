import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class TrialComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }


  selectedEmployees: any = [];
  storedMatched: any = [];
  employees: any = [
    { name: 'Vignesh', show: false, match: false},
    { name: 'Suresh', show: false, match: false},
    { name: 'Magesh', show: false, match: false},
    { name: 'Vignesh',show: false, match: false},
    { name: 'Suresh', show: false, match: false},
    { name: '5Zal', show: false, match: false},
    { name: '5Zal', show: false, match: false}, 
    { name: 'Abbu', show: false, match: false},
    { name: 'Abbu', show: false, match: false}
  ]
  constructor() {

  }



  showEmployee(employee: any, i: number) {
    employee.show = true;
    this.selectedEmployees.push(employee);
    if (this.selectedEmployees.length >= 2) {
      if (this.selectedEmployees[0].name === this.selectedEmployees[1].name) {
        this.storedMatched.push(this.selectedEmployees);
        this.selectedEmployees = [];
        console.log('hii stored', this.storedMatched);
        console.log('hii2 selected', this.selectedEmployees);
      }
      else if (this.selectedEmployees[0].name !== this.selectedEmployees[1].name) {
        const copy = [...this.selectedEmployees];
        console.log('copy', copy);
        console.log('copys i', copy[i]);
        setTimeout(() => {
          copy[i].show = false;
          copy[i].show = false;
          //        employee.show = false;
        }, 2000)
        // this.selectedEmployees = [];
        // console.log('here', this.selectedEmployees);
      }
      // else{
      //   const selectedEmployeesCopy = [...this.selectedEmployees];
      //   this.selectedEmployees = [];
      //   console.log('here', this.selectedEmployees);

      //   selectedEmployeesCopy.forEach((selectedEmployee) => {
      //     setTimeout(() =>{
      //       selectedEmployee.show = false;
      //     })
      //   })
      // }
    }
  }


 
}