import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInProgressComponent } from './upload-in-progress.component';

describe('UploadInProgressComponent', () => {
  let component: UploadInProgressComponent;
  let fixture: ComponentFixture<UploadInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
