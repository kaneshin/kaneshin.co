import path from "path";

export const joinSafety = (url: string, ...paths: string[]): string => {
  if (RegExp(/^[a-zA-Z]+:\/\//).test(url)) {
    const u = new URL(url);
    u.pathname = path.join(u.pathname, ...paths);
    return u.toString();
  }

  const pathname = path.join(url, ...paths);
  if (RegExp(/^\/\//).test(url)) {
    // case: `//example.com/foo/bar/example.jpg'
    return `/${pathname}`;
  }
  return pathname;
};

// baseUrl's signature is similar to URL constructor
export const baseUrl = (input: string, base: string): string => {
  if (RegExp(/^https?:\/\//).test(input)) {
    // case: `https://example.com/foo/bar/example.jpg'
    // early return original
    return input;
  }

  if (RegExp(/^\/\//).test(input)) {
    // case: `//example.com/foo/bar/example.jpg'
    // append protocol of the base url
    const protocol = new URL(base).protocol;
    return `${protocol}${input}`;
  }

  // case otherwise of the above cases
  return joinSafety(base, input);
};
