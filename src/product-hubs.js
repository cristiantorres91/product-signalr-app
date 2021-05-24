import { HubConnectionBuilder, LogLevel } from "@aspnet/signalr";
export default {
  install(Vue) {
    const connection = new HubConnectionBuilder()
      .withUrl(`http://localhost:55802/product-hub`) //Url api backend SignalR
      .configureLogging(LogLevel.Information)
      .build();

    let startedPromise = null;
    function start() {
      startedPromise = connection.start().catch((err) => {
        console.error("Error connection Hub", err);
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              start()
                .then(resolve)
                .catch(reject),
            5000
          )
        );
      });
      return startedPromise;
    }
    connection.onclose(() => start());

    start();
    // create new instance  Vue
        const apihub = new Vue();
    // var global this.$dashboardhub
        Vue.prototype.$apihub = apihub;

        connection.on("NewProduct", (product) => {
          apihub.$emit("info-product", { product });
    });
  },
};
