import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MaterialModule } from "./material.module";

const modules = [
    CommonModule,
    MaterialModule
];
@NgModule({
imports: [...modules],
exports:[...modules]
})
export class SharedModule{};