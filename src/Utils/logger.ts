import * as vscode from 'vscode';

export enum LogLevel {
  Debug = 'DEBUG',
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR'
}

export class Logger {
  private static outputChannel: vscode.OutputChannel | undefined;

  public static initialize(
    context: vscode.ExtensionContext
  ): void {
    if (this.outputChannel) {
      return;
    }

    this.outputChannel = vscode.window.createOutputChannel(
      'TypeScript Essentials'
    );

    context.subscriptions.push(this.outputChannel);
  }

  private static write(
    level: LogLevel,
    message: string
  ): void {
    if (!this.outputChannel) {
      return;
    }

    const timestamp = new Date().toISOString();

    this.outputChannel.appendLine(
      `[${timestamp}] [${level}] ${message}`
    );
  }

  public static debug(message: string): void {
    this.write(LogLevel.Debug, message);
  }

  public static info(message: string): void {
    this.write(LogLevel.Info, message);
  }

  public static warn(message: string): void {
    this.write(LogLevel.Warn, message);
  }

  public static error(
    message: string,
    error?: unknown
  ): void {
    this.write(LogLevel.Error, message);

    if (error !== undefined) {
      this.write(LogLevel.Error, getErrorMessage(error));
    }
  }

  public static show(): void {
    this.outputChannel?.show(true);
  }

  public static clear(): void {
    this.outputChannel?.clear();
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.stack ?? error.message;
  }

  return String(error);
}
