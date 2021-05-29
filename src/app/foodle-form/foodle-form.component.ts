import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodle-form',
  templateUrl: './foodle-form.component.html',
  styleUrls: ['./foodle-form.component.scss']
})
export class FoodleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  graphOnClick(nth: number, value: number): void {
    if(nth === 1){
      let children = document.querySelector(".form__graph--first").children;
      (<HTMLInputElement>children[0]).value = value + "";
      this.setOpacityZero(children, value);
    } else if(nth === 2){
      let children = document.querySelector(".form__graph--mid").children;
      (<HTMLInputElement>children[0]).value = value + "";
      this.setOpacityZero(children, value);
    } else if(nth === 3){
      let children = document.querySelector(".form__graph--last").children;
      (<HTMLInputElement>children[0]).value = value + "";
      this.setOpacityZero(children, value);
    }
  }

  graphEnter(nth: number, value: number){
    if(nth === 1){
      let children = document.querySelector(".form__graph--first").children;
      this.setOpacityZero(children, value);
    } else if(nth === 2){
      let children = document.querySelector(".form__graph--mid").children;
      this.setOpacityZero(children, value);
    } else if(nth === 3){
      let children = document.querySelector(".form__graph--last").children;
      this.setOpacityZero(children, value);
    }
  }

  graphLeave(nth: number){
    if(nth === 1){
      let children = document.querySelector(".form__graph--first").children;
      const value: number = +(<HTMLInputElement>children[0]).value;
      this.setOpacityZero(children, value);
    } else if(nth === 2){
      let children = document.querySelector(".form__graph--mid").children;
      const value: number = +(<HTMLInputElement>children[0]).value;
      this.setOpacityZero(children, value);
    } else if(nth === 3){
      let children = document.querySelector(".form__graph--last").children;
      const value: number = +(<HTMLInputElement>children[0]).value;
      this.setOpacityZero(children, value);
    }
  }

  setOpacityZero(children: HTMLCollection, value: number){
    for(let i = 1; i <= 5; i++){
      if(i <= value){
        children[i].classList.remove("opacityZero");
      } else {
        children[i].classList.add("opacityZero");
      }
    }
  }
}
