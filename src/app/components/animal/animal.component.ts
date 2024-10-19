import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})


export class AnimalComponent {
  animalList: any = [];

  ngOnInit() {
    this.getAllAnimals();
  }


  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data:{}) => {
      this.animalList = data;
    });
  }

  constructor(private animalService: AnimalService) { }
}
