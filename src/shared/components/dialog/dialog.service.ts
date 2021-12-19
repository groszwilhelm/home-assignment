import { PubSub } from '../../models/pub-sub';

class DialogService {
  private openMessageBus = new PubSub<string>();
  private closeMessageBus = new PubSub<boolean>();

  public open(html: string): void {
    this.openMessageBus.emit(html);
  }

  public close(): void {
    this.closeMessageBus.emit(true);
  }

  public getOpenObservable(): PubSub<string> {
    return this.openMessageBus;
  }

  public getClosedObservable(): PubSub<boolean> {
    return this.closeMessageBus;
  }
}

export const dialogService = new DialogService();
