export enum ErrorCode {
  Unknown = 'UNKNOWN',
  InvalidPreset = 'INVALID_PRESET',
  InvalidSetting = 'INVALID_SETTING',
  BackupExists = 'BACKUP_EXISTS',
  BackupNotFound = 'BACKUP_NOT_FOUND',
  BackupFailed = 'BACKUP_FAILED',
  RestoreFailed = 'RESTORE_FAILED',
  SettingsApplyFailed = 'SETTINGS_APPLY_FAILED',
  ExtensionNotFound = 'EXTENSION_NOT_FOUND'
}

export class ExtensionError extends Error {
  public readonly code: ErrorCode;

  public constructor(
    code: ErrorCode,
    message: string,
    options?: ErrorOptions
  ) {
    super(message, options);

    this.name = 'ExtensionError';
    this.code = code;
  }
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

export function isExtensionError(
  error: unknown
): error is ExtensionError {
  return error instanceof ExtensionError;
}

export function toExtensionError(
  error: unknown,
  fallbackCode: ErrorCode = ErrorCode.Unknown
): ExtensionError {
  if (isExtensionError(error)) {
    return error;
  }

  return new ExtensionError(
    fallbackCode,
    getErrorMessage(error),
    { cause: error }
  );
}
