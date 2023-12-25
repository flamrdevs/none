const memo = <T>() => {
  const state: Record<string, T> = {};
  const loading: Record<string, boolean> = {};

  const wait = (key: string): Promise<void> => {
    return new Promise((resolve) => {
      const id = setInterval(() => {
        if (!loading[key]) clearInterval(id), resolve();
      }, 10);
    });
  };

  const load = async (key: string, fn: () => Promise<T>, result?: unknown) => ((loading[key] = true), (result = await fn()), (loading[key] = false), result) as T;

  return async (key: string, fn: () => Promise<T>) => (await wait(key), (state[key] ??= await load(key, fn)));
};

export { memo };
