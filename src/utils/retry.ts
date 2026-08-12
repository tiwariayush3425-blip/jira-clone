export async function retry<T>(
  operation: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === retries) {
        throw lastError;
      }

      await new Promise((resolve) =>
        setTimeout(resolve, delay)
      );
    }
  }

  throw lastError;
}