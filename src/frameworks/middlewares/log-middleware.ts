export const logMiddleware =
  (data = 'default') =>
  (req: any, res: any, next: any) => {
    console.log(data, 'invoked');
    next();
  };
