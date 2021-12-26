import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-header',
  html: `
    <header class="header">
      <hmw-input value="Welcome, John Smith"></hmw-input>
      <hmw-icon-gift></hmw-icon-gift>
      <hmw-icon-question></hmw-icon-question>
      <hmw-icon-notifications></hmw-icon-notifications>
    </header>
  `
})
export class Header extends CustomComponent {}
