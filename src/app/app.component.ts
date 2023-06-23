import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-project';

  employees :any = [];
  newarr:any = [];


  constructor(){
    this.employees = ['abbu', 'ahamed', 'afzal'];
  }

  toCheck(){
  this.newarr.push(...this.employees);
  console.log('hi', this.newarr);
  if(!this.newarr.includes('abbu') && !this.newarr.includes('ahamed') && !this.newarr.includes('afzal')){
    this.newarr.push('khan');
  }else{
    console.log('It has already three names');
  }
  }

}
