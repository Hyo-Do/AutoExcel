interface Window {
  ipc: {
    send(channel: string, data?: any): void;
    on(channel: string, callback: (data: any) => void): void;
    off(channel: string, callback: (data: any) => void): void;
    offAll(channel: string): void;
  };
}
