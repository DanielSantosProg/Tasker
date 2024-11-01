import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NewTaskComponent } from './app/modules/task-list/pages/new-task/new-task.component';
import { ListComponent } from './app/modules/task-list/pages/list/list.component';

const routes: Route[] = [
  { path: '', component: NewTaskComponent },
  { path: 'list', component: ListComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), ...appConfig.providers],
}).catch((err) => console.error(err));
