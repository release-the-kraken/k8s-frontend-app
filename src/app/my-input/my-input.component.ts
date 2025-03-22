import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Word } from '../model/model';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    
  ],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  word!: Word;
}
