import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchPipe } from './components/header/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { PositiveNumberDirective } from './directive/positive-number.directive';



@NgModule({
  declarations: [HeaderComponent, SearchPipe, PositiveNumberDirective],
  imports: [CommonModule,FormsModule],
  exports: [HeaderComponent, CommonModule, SearchPipe],
})
export class SharedModule {}
