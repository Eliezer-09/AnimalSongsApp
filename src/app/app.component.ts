import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  title = 'Animal Songs App';
  selectedAnimal: string | null = null;
  message: string | null = null;

  selectAnimal(animal: string) {
    this.selectedAnimal = animal;
    this.message = null;
  }

  getSoundsForAnimal(animal: string): string[] {
    const sounds: { [key: string]: string[] } = {
      rana: ['brr', 'birip', 'brrah', 'croac'],
      libelula: ['fiu', 'plop', 'pep'],
      grillo: ['cric-cric', 'trri-trri', 'bri-bri']
    };
    return sounds[animal] || [];
  }

  playSound(animal: string, sound: string) {
    // Aquí se puede definir la lógica para reproducir los sonidos.
    // Por ahora, solo mostraremos un mensaje.
    this.message = `${animal} hace ${sound} y los siguientes sonidos son: ${this.getSoundsForAnimal(animal).join(', ')}`;
    this.selectedAnimal = null;
  }
}
