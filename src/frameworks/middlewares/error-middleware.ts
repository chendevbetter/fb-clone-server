export const errorMiddleware = (err: any, req: any, res: any, next: any) => {
  console.log('error middleware activated', err);

  err.statusCode = err.statusCode || 500;
  return err.customMessage || err.message;
};

export default errorMiddleware;

// /* eslint-disable no-param-reassign */
// // eslint-disable-next-line no-unused-vars
// export default function errorHandlingMiddlware(err, req, res, next) {
//   err.statusCode = err.statusCode || 404;
//   return err.customMessage || err.message
//     ? res.status(err.statusCode).json({
//         status: err.statusCode,
//         message: err.customMessage || err.message
//       })
//     : res.status(err.statusCode).json({ status: err.statusCode, message: err });
// }
