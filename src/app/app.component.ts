import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/task-list/components/navbar/navbar.component';
import { NewTaskComponent } from './modules/task-list/pages/new-task/new-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NewTaskComponent],
  template: `<app-navbar /> <app-new-task /> <router-outlet />`,
})
export class AppComponent {
  title = 'Tasker';
}
