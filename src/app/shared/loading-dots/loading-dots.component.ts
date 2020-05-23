
import { Component } from '@angular/core';

@Component({
    selector: 'app-loading-dots',
    template: '<div id="dots"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
    styleUrls: ['./loading-dots.component.scss']
})
export class LoadingDotsComponent{}