// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const omit = <T extends Record<any, any>, K extends keyof T>(
  obj: T,
  keyToOmit: K
): FIXME => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {[keyToOmit]: _, ...withoutKey} = obj;
  return withoutKey;
};
