export function formatErrorMessage(
  error: unknown,
  defaultMessage: string,
): string {
  if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  }
  return defaultMessage;
}
