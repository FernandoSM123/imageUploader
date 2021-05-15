import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFinishedComponent } from './upload-finished.component';

describe('UploadFinishedComponent', () => {
  let component: UploadFinishedComponent;
  let fixture: ComponentFixture<UploadFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFinishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
