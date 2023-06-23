import { Component } from '@angular/core';

@Component({
  selector: 'app-find-fruit',
  templateUrl: './find-fruit.component.html',
  styleUrls: ['./find-fruit.component.scss']
})
export class FindFruitComponent {
  fruits: any = [];
  flip = false;
  constructor() {
    this.fruits = [
      { imagePath: '../assets/apple.jpg', showImage: false, matched: false },
      { imagePath: '../assets/banana.jpg', showImage: false, matched: false },
      { imagePath: '../assets/grapes.jpg', showImage: false, matched: false },
      { imagePath: '../assets/jackfruit.jpg', showImage: false, matched: false },
      { imagePath: '../assets/peas.jpg', showImage: false, matched: false },
      { imagePath: '../assets/roseapple.jpg', showImage: false, matched: false },
      { imagePath: '../assets/strawberry.jpg', showImage: false, matched: false },
      { imagePath: '../assets/orange.jpg', showImage: false, matched: false },
      { imagePath: '../assets/orange.jpg', showImage: false, matched: false },
      { imagePath: '../assets/apple.jpg', showImage: false, matched: false },
      { imagePath: '../assets/jackfruit.jpg', showImage: false, matched: false },
      { imagePath: '../assets/banana.jpg', showImage: false, matched: false },
      { imagePath: '../assets/grapes.jpg', showImage: false, matched: false },
      { imagePath: '../assets/roseapple.jpg', showImage: false, matched: false },
      { imagePath: '../assets/strawberry.jpg', showImage: false, matched: false },
      { imagePath: '../assets/peas.jpg', showImage: false, matched: false }
    ];
    // this.fruits = this.fruits.sort(() => Math.random() - 0.5);
  }
  selectedFruits: any[] = [];
  score: number = 0;

  toggleImage(fruit: any, i: number) {
    console.log('index', i);
    console.log('data', fruit)
    if (!fruit.matched) {
      console.log('matching', fruit.matched);


      if (!fruit.showImage)
        console.log('matching2', fruit.showImage);

      {
        if (this.selectedFruits.length === 0) {
          console.log('47', this.selectedFruits.length);
          fruit.showImage = true;
          this.selectedFruits.push(fruit);
        }

        else if (this.selectedFruits.length === 1 ) {              //&& this.selectedFruits[0] !== fruit
          fruit.showImage = true;
          this.selectedFruits.push(fruit);
          this.checkAllMatches();

          if (this.selectedFruits[0].imagePath === this.selectedFruits[1].imagePath) {
            this.selectedFruits[0].matched = true;
            this.selectedFruits[1].matched = true;
            this.score += 1;
          }

          else if(this.selectedFruits[0].imagePath !== this.selectedFruits[1].imagePath) {
            this.flip = true;
            
            setTimeout(() => {
              this.fruits.matched = false;
              this.fruits.matched = false;
            }, 1000);
          }
        }
        console.log('show', this.selectedFruits);
      }
    }


    if (this.selectedFruits.length === 2) {
      this.selectedFruits = [];
      console.log('current', this.selectedFruits)
    }
  }
  checkAllMatches() {
    const matchedPairs = this.fruits.filter((fruit: { matched: any; }) => fruit.matched);
    if (matchedPairs.length === this.fruits.length) {
      console.log('All images are matched');

    }
  }
}
