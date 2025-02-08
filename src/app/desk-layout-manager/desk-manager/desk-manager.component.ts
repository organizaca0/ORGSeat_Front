import { Component } from '@angular/core';
import { DeskTable } from '../../shared/services/interfaces/DeskTable';
import { CommonModule } from '@angular/common'; // Use CommonModule instead of BrowserModule
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@Component({
  selector: 'desk-manager',
  standalone: true, // Mark the component as standalone
  templateUrl: './desk-manager.component.html',
  styleUrls: ['./desk-manager.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class DeskManagerComponent {
  mockData: DeskTable[] = [
    { id: 1, descricao: 'Projeto Alpha', membros: ['Alice', 'Bob'], lm: 'Alice' },
    { id: 2, descricao: 'Projeto Beta', membros: ['Charlie', 'David'], lm: 'Charlie' },
    { id: 3, descricao: 'Projeto Gamma', membros: ['Eve', 'Frank'], lm: 'Eve' },
    { id: 4, descricao: 'Projeto Delta', membros: ['Grace', 'Heidi'], lm: 'Grace' },
    { id: 5, descricao: 'Projeto Epsilon', membros: ['Ivan', 'Judy'], lm: 'Ivan' },
  ];

  displayedColumns: string[] = ['id', 'descricao', 'membros', 'lm', 'action']; // Added 'action' to the displayed columns
}
