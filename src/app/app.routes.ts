import { Routes } from '@angular/router';
import { DeskManagerComponent } from './desk-layout-manager/desk-manager/desk-manager.component';
import { DeskEditorComponent } from './desk-layout-manager/desk-editor/desk-editor.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'desk-manager', 
        component: DeskManagerComponent 
    },
    { 
        path: 'desk-editor', 
        component: DeskEditorComponent 
    },

];
