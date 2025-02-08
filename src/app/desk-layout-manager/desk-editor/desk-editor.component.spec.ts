import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskEditorComponent } from './desk-editor.component';

describe('DeskEditorComponent', () => {
  let component: DeskEditorComponent;
  let fixture: ComponentFixture<DeskEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeskEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
