import { NavItem } from './menu.models';

export class Menu extends HTMLElement {
  static register() {
    window.customElements.define('hmw-menu', Menu);
  }
  
  static template = `
    <nav class="menu-container">
      <span class="menu-logo">
        <hmw-icon-logo></hmw-icon-logo>
      </span>

      <ul class="menu" data-menu="true"></ul>
    </nav>
  `;

  private navItems = [
    new NavItem('Dashboard', 'hmw-icon-dashboard'),
    new NavItem('Incidents', 'hmw-icon-incidents'),
    new NavItem('Network', 'hmw-icon-network'),
    new NavItem('Risk Management', 'hmw-icon-risk-management'),
    new NavItem('Policies', 'hmw-icon-policies'),
    new NavItem('Reports', 'hmw-icon-reports'),
    new NavItem('Quarantine', 'hmw-icon-quarantine'),
    new NavItem('Companies', 'hmw-icon-companies'),
    new NavItem('Accounts', 'hmw-icon-accounts'),
    new NavItem('Sandbox Analyzer', 'hmw-icon-sandbox-analyzer'),
    new NavItem('Email Security', 'hmw-icon-email-security'),
    new NavItem('Sandbox Analyzer', 'hmw-icon-configuration'),
  ]

  public connectedCallback(): void {
    this.renderTemplate();
    this.renderNavItems();
    this.attachEventListeners();
  }

  public disconnectedCallback(): void {
    const menuElementRef: HTMLUListElement = this.querySelector('[data-menu]');

    menuElementRef.removeEventListener('click', this.handeItemClicks);
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  /**
   * Renders list items dinamically.
   * Sets pointer events on icons to none so that the event target will always be the list item.
   */
  private renderNavItems(): void {
    const containerRef: HTMLUListElement = this.querySelector('[data-menu]');
    let html = '';

    this.navItems.forEach((item) => {
      html += `
        <li class="menu__item" data-id=${item.id}> 
          <${item.iconSelector} class="u-no-pointer-events"> </${item.iconSelector}> 
          ${item.name} 
        </li>`
    });

    containerRef.innerHTML = html;
  }

  private attachEventListeners(): void {
    const menuElementRef: HTMLUListElement = this.querySelector('[data-menu]');

    menuElementRef.addEventListener('click', this.handeItemClicks);
  }

  private handeItemClicks = (event: Event) => {
    const { id } = (event.target as HTMLLIElement).dataset;

    console.log(`Menu item with id: ${id} has been clicked`);
  }
}

const template = document.createElement('template');
template.innerHTML = Menu.template;
