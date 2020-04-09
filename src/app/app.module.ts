import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DailyQuoteComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateAgoPipe } from './date-count.pipe';
import { HighlightDirective } from './strikethrough.directive';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DailyQuoteComponent,
    QuoteFormComponent,
    DateAgoPipe,
    HighlightDirective,
    VoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }