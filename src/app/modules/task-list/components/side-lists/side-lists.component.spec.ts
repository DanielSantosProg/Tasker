import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideListsComponent } from './side-lists.component';

describe('SideListsComponent', () => {
  let component: SideListsComponent;
  let fixture: ComponentFixture<SideListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
