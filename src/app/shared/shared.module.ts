import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PulsoModule, PulsoSharedModule } from 'pulso-angular-design-system';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PulsoSharedModule,
    PulsoModule.forRoot({
      token: 'drogaraia',
      formField: {
        size: 'medium',
      },
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PulsoModule,
    PulsoSharedModule,
  ],
})
export class SharedModule {}
