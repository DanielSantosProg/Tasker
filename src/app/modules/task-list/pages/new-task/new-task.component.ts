import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SideListsComponent } from '../../components/side-lists/side-lists.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SideListsComponent,
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('https://localhost:5001/api/TaskList')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
        this.fillDropdown();
      });
  }

  newtaskForm!: FormGroup;
  name = new FormControl('Daniel Santos');

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.newtaskForm = this.fb.group({
      dropdown: [null, [Validators.required]], // Set initial value to null for placeholder
      myLists: this.fb.array([]),
      taskName: ['', [Validators.minLength(1), Validators.maxLength(30)]],
      taskDescription: [''],
      taskDate: ['', [Validators.required]],
    });
  }

  public fillDropdown() {
    let listNames: any[] = this.data.map((item) => item.name);
    listNames.forEach((item) => {
      (this.newtaskForm.get('myLists') as FormArray).push(
        this.fb.control(item)
      );
    });
  }

  // public addList(listName: string) {
  //   this.externalList.push(listName);
  //   this.externalList.forEach((item) => {
  //     console.log(item);
  //   });
  // }

  public submit() {
    if (this.newtaskForm.valid) {
      console.log(this.newtaskForm.value);
    }
  }
}
