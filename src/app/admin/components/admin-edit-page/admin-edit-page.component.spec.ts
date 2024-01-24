import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPageComponent } from './admin-edit-page.component';

describe('AdminEditPageComponent', () => {
  let component: AdminEditPageComponent;
  let fixture: ComponentFixture<AdminEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditPageComponent]
    });
    fixture = TestBed.createComponent(AdminEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
