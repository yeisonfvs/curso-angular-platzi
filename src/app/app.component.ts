import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public name= 'yeison';
 public age = 50;
 imagen = "https://picsum.photos/100"
 btnDisabled = true;

 person = {
  name: "fabian",
  age: 20,
  imagen: "https://picsum.photos/100"

 }

 toggleButton() {
  this.btnDisabled = !this.btnDisabled;
 }

 incrementage() {
  this.person.age += 1;
 }

 onScroll(event: Event) {
   const element = event.target as HTMLElement;
   console.log(element.scrollTop);
 }

 changeName(event: Event) {
  const element = event.target as HTMLInputElement;
  this.person.name = element.value;

 }
 
}


