export class IconRocket extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-rocket', IconRocket);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="162.793" height="156.672" viewBox="0 0 162.793 156.672">
      <defs>
        <clipPath id="clip-path">
          <path id="Path_10221" data-name="Path 10221" d="M117.376,25.04s24.281.216,36.787,19.454c12.689,19.521,20.692,85.241-45.728,108.535S14.425,96.677,11.359,89.016s-28.253-58.685,8.033-80.8C57.154-14.79,60.012,21.367,117.376,25.04Z" transform="translate(0 -0.61)" fill="none"/>
        </clipPath>
        <linearGradient id="linear-gradient" x1="0.915" y1="0.306" x2="-0.006" y2="1.063" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#fff"/>
          <stop offset="0.087" stop-color="#f8fbfe"/>
          <stop offset="0.23" stop-color="#f5f9fd"/>
          <stop offset="0.249" stop-color="#f4f8fd"/>
          <stop offset="0.584" stop-color="#eaf1fc"/>
          <stop offset="1" stop-color="#e7effc"/>
        </linearGradient>
      </defs>
      <g id="Group_11000" data-name="Group 11000" clip-path="url(#clip-path)">
        <path id="Path_10220" data-name="Path 10220" d="M70.531,252.478l89.452-1.433c-.108-.734-1.181-19.36-1.451-20.049-.222-.65-.425-1.3-.683-1.947a9.752,9.752,0,0,0-1.311-2.23,7.713,7.713,0,0,0-3.612-2.648,6.884,6.884,0,0,0-1.752-.374,17.2,17.2,0,0,0-.615-1.893,10.919,10.919,0,0,0-6.349-6.215,15.236,15.236,0,0,0-6.876-.387,15.77,15.77,0,0,0-2.57.518,7.393,7.393,0,0,0-2.876-3.755c-2.291-1.5-5.369-1.426-7.846-.621a10.523,10.523,0,0,0-2.3,1.074,23.326,23.326,0,0,0-2.772-3.434,17.354,17.354,0,0,0-5.072-3.546,12.79,12.79,0,0,0-11.646.842,12.483,12.483,0,0,0-4.406,4.535c-.272-.08-.548-.152-.831-.209a12.044,12.044,0,0,0-9.217,1.878,16.784,16.784,0,0,0-5.426,6.379,11.462,11.462,0,0,0-7.1,1.917,11.955,11.955,0,0,0-4.824,11.823C70.464,232.835,70.507,252.351,70.531,252.478Z" transform="translate(-32.552 -94.802)" fill="url(#linear-gradient)"/>
      </g>
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
template.innerHTML = IconRocket.template;
