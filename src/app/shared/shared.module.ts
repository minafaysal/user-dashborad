import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { PositiveNumberDirective } from './directive/positive-number.directive';

@NgModule({
  declarations: [HeaderComponent, PositiveNumberDirective],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, CommonModule],
})
export class SharedModule {}
