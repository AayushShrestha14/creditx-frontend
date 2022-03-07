import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormatDataPipe } from 'src/app/common_resource_modules/pipes/format-data.pipe';

const PIPES: Array<any> = [
  FormatDataPipe
];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES],
  providers: [...PIPES]
})
export class PipesModule {}
