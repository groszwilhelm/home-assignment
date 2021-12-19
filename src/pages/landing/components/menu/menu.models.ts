export class NavItem {
  public id: string;

  constructor(
    public name: string,
    public iconSelector: string,
  ) { 
    this.id = name.split(' ').join('').toLowerCase();
  }
}
