import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-form-group',
  html: `
    <div class="row">
      <div class="col-2">
        <slot name="label"></slot>
      </div>

      <div class="col-2">
        <slot name="form-control"></slot>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
    }

    .col-2 {
      flex: 0 0 16.66667%;
      max-width: 0 0 16.66667%;
    }
  `,
  withShadowDom: true
})
export class FormGroup extends CustomComponent { }
