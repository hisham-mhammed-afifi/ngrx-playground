import { NgModule } from '@angular/core';
import { TodosComponent } from './todos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TodosComponent],
  imports: [SharedModule],
})
export class TodosModule {}
