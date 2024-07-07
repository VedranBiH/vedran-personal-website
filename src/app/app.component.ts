import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelModule, ToDoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-website';
  checked: boolean = false;
}
