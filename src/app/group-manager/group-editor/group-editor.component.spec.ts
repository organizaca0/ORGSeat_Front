import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEditorComponent } from './group-editor.component';

describe('GroupEditorComponent', () => {
  let component: GroupEditorComponent;
  let fixture: ComponentFixture<GroupEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
