import { SafePipe } from './urlSatinize/urlSatinize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPicturePipe } from './appPicture/appPicture.pipe';
import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';
import { MailSearchPipe } from './search/mail-search.pipe';
import { SearchPipe } from './search/search.pipe';
import { PolicyReportPipe } from './search/policy-report.pipe';
import { BillingReportPipe } from './search/billing-report.pipe';

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        AppPicturePipe, 
        ProfilePicturePipe,
        MailSearchPipe,
        SearchPipe,
        PolicyReportPipe,
        BillingReportPipe,
        SafePipe
    ],
    exports: [
        AppPicturePipe,
        ProfilePicturePipe,
        MailSearchPipe,
        SearchPipe,
        PolicyReportPipe,
        BillingReportPipe,
        SafePipe
    ]
})
export class PipesModule { }
