import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    exports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule
    ]
})
export class AppMaterialModule {}
