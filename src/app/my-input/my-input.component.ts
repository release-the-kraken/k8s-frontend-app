import { Word } from './../model/model';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from "@angular/forms";
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.css'
})
export class MyInputComponent {
  word: Word = this.getDefaultWord()

  constructor(private service: CommonService){}

  getDefaultWord(): Word{
    return Object.assign({}, {
      id: 0,
      word: ""
    })
  }

  handleSubmit(){
    this.service.create(this.word)
    .subscribe({
      next: () => {
        console.log("Added word: " + this.word.id + " | " + this.word.word)
      },
      error: (err) => {
        console.log("ERROR: " + this.word.word)
      }
    })
  }
}
