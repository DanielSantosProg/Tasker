import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
    this.data.forEach((list) => {
      list.isDropdownVisible = true;
    });
  }

  isDropdownVisible: boolean = true;
  public toggleDropdown(list: any) {
    list.isDropdownVisible = !list.isDropdownVisible;
  }

  fetchData() {
    this.httpClient
      .get('https://localhost:5001/api/TaskList')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
