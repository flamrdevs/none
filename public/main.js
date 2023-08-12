try {
  console.time('initialize');
  const app = (await import('./app.js')).default;
  console.timeEnd('initialize');

  const port = 8000;
  const hostname = '0.0.0.0';

  const server = Deno.serve(
    {
      port,
      hostname,
      onListen: () => {
        console.log(`[none]: ${hostname}:${port}`);
      },
    },
    app.fetch
  );

  await server.finished;
} catch (error) {
  console.error(error);
}
