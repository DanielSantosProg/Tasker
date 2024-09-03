import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-lists',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './side-lists.component.html',
  styleUrl: './side-lists.component.scss',
})
export class SideListsComponent {
  @Input() data: any[] = [];
}
