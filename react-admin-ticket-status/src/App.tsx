import { Admin, Resource } from "react-admin";
import { Provider } from "react-redux";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import store from "@/stores/index";
import status from "@/containers/status/index";
import Footer from "./containers/Footer";

const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="status" {...status} />
  </Admin>
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
    <Footer />
  </Provider>
);

export default AppWrapper;
