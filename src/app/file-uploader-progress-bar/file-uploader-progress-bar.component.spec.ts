import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderProgressBarComponent } from './file-uploader-progress-bar.component';

describe('FileUploaderProgressBarComponent', () => {
  let component: FileUploaderProgressBarComponent;
  let fixture: ComponentFixture<FileUploaderProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploaderProgressBarComponent]
    });
    fixture = TestBed.createComponent(FileUploaderProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
