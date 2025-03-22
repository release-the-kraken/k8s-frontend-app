import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyInputComponent } from "./my-input/my-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'k8s-frontend-app';
}
