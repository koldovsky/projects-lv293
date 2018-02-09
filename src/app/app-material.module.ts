import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule
} from '@angular/material';

@NgModule({
    exports: [
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,  
        MatButtonModule,
        MatButtonToggleModule,
    ]
}) 
export class AppMaterialModule {}

