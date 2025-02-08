import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'desk-editor',
  standalone: true, // Mark the component as standalone
  templateUrl: './desk-editor.component.html',
  styleUrl: './desk-editor.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, // Import Angular Material Input Module
    MatFormFieldModule, // Import Angular Material Form Field Module
    MatButtonModule // Import Angular Material Button Module
  ],
})
export class DeskEditorComponent {
  rowsInput: number = 0;
  columnsInput: number = 0;
  matrix: number[][] = [];
  selectedPositions: { row: number, col: number }[] = [];

  generateMatrix() {
    this.matrix = Array.from({ length: this.rowsInput }, (_, rowIndex) => 
      Array.from({ length: this.columnsInput }, (_, colIndex) => colIndex + 1)
    );
    this.selectedPositions = [];
  }

  togglePositionSelection(row: number, col: number) {
    const position = { row, col };
    const index = this.selectedPositions.findIndex(
      p => p.row === row && p.col === col
    );
    if (index === -1) {
      this.selectedPositions.push(position);
    } else {
      this.selectedPositions.splice(index, 1);
    }
  }

  isSelected(row: number, col: number): boolean {
    return this.selectedPositions.some(p => p.row === row && p.col === col);
  }
}