const memo = <T>() => {
  const state: Record<string, T> = {};
  const loading: Record<string, boolean> = {};

  const wait = (key: string): Promise<void> => {
    return new Promise((resolve) => {
      const id = setInterval(() => {
        if (!loading[key]) {
          clearInterval(id);
          resolve();
        }
      }, 50);
    });
  };

  const load = async (key: string, fn: () => Promise<T>) => {
    loading[key] = true;
    const result = await fn();
    loading[key] = false;
    return result;
  };

  return async (key: string, fn: () => Promise<T>) => {
    await wait(key);
    return (state[key] ??= await load(key, fn));
  };
};

export { memo };
