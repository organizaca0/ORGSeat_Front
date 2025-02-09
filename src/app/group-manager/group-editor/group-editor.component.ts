import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../shared/services/group-service';
import { MatChipInputEvent } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input'; // Required for input fields inside mat-form-field
import { MatIconModule } from '@angular/material/icon'; // For icons (if you're using them)
import {MatChipsModule} from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-group-editor',
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './group-editor.component.html',
  styleUrl: './group-editor.component.scss',
})
export class GroupEditorComponent {
  groupId: number = 0;
  members: string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<GroupEditorComponent>
  ) {
    this.groupId = data.groupId;
    // this.groupService.getGroupMembers().subscribe((data) => {
    // this.members = data;
    // });
  }

  addMember(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && !this.members.includes(value)) {
      this.members.push(value);
    }

    event.input.value = '';
  }

  
  removeMember(member: string): void {
    const index = this.members.indexOf(member);

    if (index >= 0) {
      this.members.splice(index, 1);
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  save(){
    this.closeDialog();
  }
}
