import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  edittaskForm!: FormGroup;
  name = new FormControl('Daniel Santos');

  externalList: string[] = ['Default List', 'My List 1', 'My List 2'];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.edittaskForm = this.fb.group({
      dropdown: ['Default List', [Validators.required]],
      myLists: this.fb.array([]),
      taskName: ['', [Validators.minLength(1), Validators.maxLength(30)]],
      taskDescription: [''],
      taskDate: ['', [Validators.required]],
    });

    this.externalList.forEach((item) => {
      (this.edittaskForm.get('myLists') as FormArray).push(
        this.fb.control(item)
      );
    });
  }

  public addList(listName: string) {
    this.externalList.push(listName);
    this.externalList.forEach((item) => {
      console.log(item);
    });
  }

  public submit() {
    if (this.edittaskForm.valid) {
      console.log(this.edittaskForm.value);
    }
  }
}
