import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'desk-editor',
  standalone: true, 
  templateUrl: './desk-editor.component.html',
  styleUrls: ['./desk-editor.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule, 
  ],
})
export class DeskEditorComponent {
  rowsInput: number = 0;
  columnsInput: number = 0;
  matrix: (number | string)[][] = []; 
  selectedPositions: { row: number, col: number }[] = [];

  generateMatrix() {
    this.matrix = Array.from({ length: this.rowsInput }, (_, rowIndex) =>
      Array.from({ length: this.columnsInput }, (_, colIndex) => colIndex + 1)
    );
    this.selectedPositions = [];
  }

  togglePositionSelection(row: number, col: number) {
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
    if (this.matrix[row][col] === '-') {
      return true;
    }
  
    return this.selectedPositions.some(p => p.row === row && p.col === col);
  }
  
  
  

  addRowBelow(rowIndex: number) {
    const newRow = Array(this.columnsInput).fill('-');
    this.matrix.splice(rowIndex + 1, 0, newRow);
  
    for (let colIndex = 0; colIndex < this.columnsInput; colIndex++) {
      this.selectedPositions.push({ row: rowIndex + 1, col: colIndex });
    }
    this.selectedPositions = [];

  }
  
  
  removeRow(rowIndex: number) {
    if (this.matrix[rowIndex].every(cell => cell === '-')) {
      this.matrix.splice(rowIndex, 1);
    }
    this.selectedPositions = [];

  }  

  addColumnLeft(colIndex: number) {
    this.matrix.forEach(row => {
      row.splice(colIndex, 0, '-');
    });
  
    this.matrix.forEach((row, rowIndex) => {
      if (row[colIndex] === '-') {
        this.selectedPositions.push({ row: rowIndex, col: colIndex });
      }
    });
  
    this.columnsInput += 1;
    this.selectedPositions = [];

  }

  isDashRow(row: any[]): boolean {
    return row.every(cell => cell === '-');
  }
  
}
