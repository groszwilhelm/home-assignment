import { PubSub } from '../../models/pub-sub';
import { AlertConfig } from './alert.models';

class AlertService {
  private openMessageBus = new PubSub<AlertConfig>();
  private closeMessageBus = new PubSub<boolean>();

  public open(config: AlertConfig): void {
    this.openMessageBus.emit(config);
  }

  public close(): void {
    this.closeMessageBus.emit(true);
  }

  public getOpenObservable(): PubSub<AlertConfig> {
    return this.openMessageBus;
  }

  public getCloseObservable(): PubSub<boolean> {
    return this.closeMessageBus;
  }
}

export const alertService = new AlertService();
