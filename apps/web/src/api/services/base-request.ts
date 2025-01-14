declare global {
  interface Window {
    xsrf_val: string;
  }
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
class ErrorResponse<T = any> extends Error {
  response: Response;
  data: T;

  constructor(message: string, response: Response, data: T) {
    super(message);
    this.response = response;
    this.data = data;
  }
}

/**
 * Dynamically determines the base URL for API requests.
 */
const getBaseUrl = (): string => {
  const { hostname } = window.location;

  if (hostname === 'localhost') {
    return 'http://localhost:4000';
  }

  return `https://api.${hostname}`;
};

/**
 * Enterprise-ready request function for API calls.
 * @template T The expected response data type.
 * @param url The relative URL of the API endpoint.
 * @param options Additional fetch options.
 * @returns A tuple containing the response data and the full response.
 */
// eslint-disable-next-line no-undef
export const request = async <T>(url: string, options: RequestInit = {}): Promise<[T, Response]> => {
  const csrfValue = window.xsrf_val;
  const baseUrl = getBaseUrl();

  const headers = {
    'Content-Type': 'application/json',
    ...(csrfValue && { 'X-XSRF-TOKEN': csrfValue }),
    ...(options.headers || {}),
  };

  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers,
    credentials: 'same-origin', // Ensures cookies are sent
  });

  let data: T;

  try {
    data = await response.json();
  } catch {
    data = null as unknown as T; // Graceful handling if response is not JSON
  }

  if (!response.ok) {
    // Check if the data has a `message` property (optional chaining ensures safe access).
    const errorMessage = (data as { message?: string })?.message || 'An error occurred';
    throw new ErrorResponse<T>(errorMessage, response, data);
  }

  return [data, response];
};
