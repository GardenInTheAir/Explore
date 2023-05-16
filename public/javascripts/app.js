if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js")
    .then((reg) => {
      console.log("file registered", reg);
    })
    .catch((err) => {
      console.log("err", err);
    })
}