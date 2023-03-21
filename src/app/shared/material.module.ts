import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
const modules = [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
];

@NgModule({
    imports:[...modules],
    exports: [...modules]
})
export class MaterialModule {};