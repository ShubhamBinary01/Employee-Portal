import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttrDirectiveDirective } from './AttrDirective.directive';
import { UpperCasePipePipe } from './UpperCasePipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceService } from './Services/CommonService.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [			
    AppComponent, StructuralDirectiveComponent,
      AttrDirectiveDirective,
      UpperCasePipePipe,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
