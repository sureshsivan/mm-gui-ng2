import { Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'appHeader',
    template: `<div class="ui borderless main menu fixed" 
                    style="position: fixed; top: 0px; left: auto; z-index: 10;">
        <div class="ui text container">
          <div href="#" class="header item">
            <img class="logo" src="assets/images/logo.png">
            Project Name
          </div>
          <a href="#" class="item">Blog</a>
          <a href="#" class="item">Articles</a>
          <a href="#" class="ui right floated dropdown item" tabindex="0">
            Dropdown <i class="dropdown icon"></i>
            <div class="menu" tabindex="-1">
              <div class="item">Link Item</div>
              <div class="item">Link Item</div>
              <div class="divider"></div>
              <div class="header">Header Item</div>
              <div class="item">
                <i class="dropdown icon"></i>
                Sub Menu
                <div class="menu">
                  <div class="item">Link Item</div>
                  <div class="item">Link Item</div>
                </div>
              </div>
              <div class="item">Link Item</div>
            </div>
          </a>
        </div>
      </div>`
})

export class HeaderImpl{ }