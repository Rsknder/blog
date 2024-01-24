import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatePageComponent } from './admin-create-page.component';

describe('AdminCreatePageComponent', () => {
  let component: AdminCreatePageComponent;
  let fixture: ComponentFixture<AdminCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreatePageComponent]
    });
    fixture = TestBed.createComponent(AdminCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
