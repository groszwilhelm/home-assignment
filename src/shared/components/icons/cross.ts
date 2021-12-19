

export class IconCross extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-cross', IconCross);
  }

  public static template = `
    <svg id="baseline-close-24px" xmlns = "http://www.w3.org/2000/svg" width = "35.995" height = "35.995" viewBox = "0 0 35.995 35.995" >
  <path id="Path_1998" data - name="Path 1998" d = "M20.02,6.513,18.507,5l-6,6-6-6L5,6.513l6,6-6,6L6.513,20.02l6-6,6,6,1.513-1.513-6-6Z" transform = "translate(5.487 5.487)" opacity = "0.5" />
    <path id="Path_1999" data - name="Path 1999" d = "M0,0H36V36H0Z" fill = "none" />
    </svg>`;

  public connectedCallback(): void {
    this.renderTemplate();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}

const template = document.createElement('template');
template.innerHTML = IconCross.template;
