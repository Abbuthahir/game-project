import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-find-fruit',
  templateUrl: './find-fruit.component.html',
  styleUrls: ['./find-fruit.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('default', style({ transform: 'none' })),
      state('flipped', style({ transform: 'rotateY(180deg) scaleX(-1)' })),
      transition('default <=> flipped', animate('500ms ease-in')),
    ]),
  ]
})
export class FindFruitComponent {
  // display: any;
  fruits: any = [];
  flip = false;
  winningGif = false;
  constructor() {
    this.fruits = [
      { imagePath: '../assets/animated-purple (1).png', showImage: false},
      { imagePath: '../assets/animated-banana (1).png', showImage: false},
      { imagePath: '../assets/animated-dragonfruit (1).png', showImage: false},
      { imagePath: '../assets/animated-half-orange (1).png', showImage: false },
      { imagePath: '../assets/animated-mango (1).png', showImage: false},
      { imagePath: '../assets/animated-orange (1).png', showImage: false},
      { imagePath: '../assets/animated-strawberry (1).png', showImage: false},
      { imagePath: '../assets/animated-peas (1).png', showImage: false},
      { imagePath: '../assets/animated-peas (1).png', showImage: false},
      { imagePath: '../assets/animated-purple (1).png', showImage: false},
      { imagePath: '../assets/animated-half-orange (1).png', showImage: false},
      { imagePath: '../assets/animated-banana (1).png', showImage: false},
      { imagePath: '../assets/animated-dragonfruit (1).png', showImage: false},
      { imagePath: '../assets/animated-orange (1).png', showImage: false},
      { imagePath: '../assets/animated-strawberry (1).png', showImage: false},
      { imagePath: '../assets/animated-mango (1).png', showImage: false}
    ];
    this.fruits = this.fruits.sort(() => Math.random() - 0.5);
  }
  selectedFruits: any[] = [];
  matchedFruits: any[] = [];
  score: number = 0;

  toggleImage(fruit: any, i: number) {
    if (!fruit.showImage) {
    fruit.showImage = true;
    this.selectedFruits.push(fruit);
    if (this.selectedFruits.length >= 2) {
      if (this.selectedFruits[0].imagePath === this.selectedFruits[1].imagePath) {
        this.matchedFruits.push(this.selectedFruits);
        this.selectedFruits = [];
        console.log('matched', this.matchedFruits);
        console.log('temp', this.selectedFruits);
        this.score += 1;
      }
      else if (this.selectedFruits[0].imagePath !== this.selectedFruits[1].imagePath) {
        setTimeout(() => {
          this.selectedFruits[0].showImage = false;
          this.selectedFruits[1].showImage = false;
          console.log('ifNotEqual', this.selectedFruits);
          this.selectedFruits = [];
        }, 500)
      }
    }
    if(this.score === 8){
    this.winningGif = true;
    this.flip = true;
    }
  }
}

  toRestart() {
    this.selectedFruits = [];
    this.matchedFruits = [];
    this.score = 0;
    this.winningGif = false;
    this.fruits.forEach((fruit: any) => {
      fruit.showImage = false;
    });
  }
 

}

