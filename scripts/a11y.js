/* istanbul ignore file */

export default async function () {
  if (process.env.NODE_ENV === 'development') {
    import("axe-core").then((axe) => {
      axe
        .run()
        .then(results => {
          if (results.violations.length) {
            console.warn(results.violations);
          }
        })
    });
  }
};
