export class PubSub<T> {
  private listeners: Array<Function> = [];

  /**
   * Subscribes to events emmited by the observable and retruns array index to be used for unsubscribing
   */
  public subscribe(callbackFunction: Function): number {
    const length = this.listeners.push(callbackFunction);

    return length -1;
  }

  public unsubscribe(id: number) {
    this.listeners.splice(id, 1);
  }

  /**
   * Notify existing subscribers
   */
  public emit(payload: T) {
    this.listeners.forEach((listener) => listener(payload));
  }
}

