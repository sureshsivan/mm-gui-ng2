import { Component } from 'angular2/core';

@Component({
    selector: 'app',
    template:   `<h1>Hello, Angular2 - config test</h1>
                <div class="ui vertical animated button" tabindex="0">
                    <div class="hidden content">Shop</div>
                    <div class="visible content">
                        <i class="shop icon"></i>
                    </div>
                </div>`
})
export class AppComponent { }