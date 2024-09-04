import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-lists',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './side-lists.component.html',
  styleUrl: './side-lists.component.scss',
})
export class SideListsComponent implements OnInit {
  @Input() data: any[] = [];
  ngOnInit(): void {
    this.data.forEach((list) => {
      list.isDropdownVisible = true;
    });
  }

  isDropdownVisible: boolean = true;
  public toggleDropdown(list: any) {
    list.isDropdownVisible = !list.isDropdownVisible;
  }
}
