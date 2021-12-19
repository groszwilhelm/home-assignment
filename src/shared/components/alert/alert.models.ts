export enum AlertType {
  Success = 'alert--success',
}

export class AlertConfig {
  constructor(
    public type: AlertType
  ) {}
}
