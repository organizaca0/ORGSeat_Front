import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Import the MatIconModule

@Component({
  selector: 'desk-editor',
  standalone: true, // Mark the component as standalone
  templateUrl: './desk-editor.component.html',
  styleUrls: ['./desk-editor.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule, // Add MatIconModule to the imports
  ],
})
export class DeskEditorComponent {
  rowsInput: number = 0;
  columnsInput: number = 0;
  matrix: (number | string)[][] = []; // Allow both numbers and strings in the matrix
  selectedPositions: { row: number, col: number }[] = [];

  generateMatrix() {
    this.matrix = Array.from({ length: this.rowsInput }, (_, rowIndex) =>
      Array.from({ length: this.columnsInput }, (_, colIndex) => colIndex + 1)
    );
    this.selectedPositions = [];
  }

  togglePositionSelection(row: number, col: number) {
    // If the cell is "-", we don't toggle, it's always considered selected
    if (this.matrix[row][col] === '-') {
      return;
    }
  
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
    // If the cell contains "-", consider it selected by default
    if (this.matrix[row][col] === '-') {
      return true;
    }
  
    // Otherwise, check if it's selected based on the selectedPositions array
    return this.selectedPositions.some(p => p.row === row && p.col === col);
  }
  
  
  

  addRowBelow(rowIndex: number) {
    // Add the new row filled with dashes
    const newRow = Array(this.columnsInput).fill('-');
    this.matrix.splice(rowIndex + 1, 0, newRow);
  
    // Automatically select this new row
    for (let colIndex = 0; colIndex < this.columnsInput; colIndex++) {
      this.selectedPositions.push({ row: rowIndex + 1, col: colIndex });
    }
    this.selectedPositions = [];

  }
  
  
  removeRow(rowIndex: number) {
    // Only remove the row if it is filled with "-"
    if (this.matrix[rowIndex].every(cell => cell === '-')) {
      this.matrix.splice(rowIndex, 1);
    }
    this.selectedPositions = [];

  }  

  addColumnLeft(colIndex: number) {
    // Add a new column filled with dashes
    this.matrix.forEach(row => {
      row.splice(colIndex, 0, '-');
    });
  
    // Automatically select the new column (if it's filled with dashes)
    this.matrix.forEach((row, rowIndex) => {
      if (row[colIndex] === '-') {
        this.selectedPositions.push({ row: rowIndex, col: colIndex });
      }
    });
  
    // Update the column count
    this.columnsInput += 1;
    this.selectedPositions = [];

  }

  isDashRow(row: any[]): boolean {
    // Check if the entire row contains only "-"
    return row.every(cell => cell === '-');
  }
  
}
