import { Admin, Resource, CustomRoutes, useStore } from "react-admin";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import CustomLayout from "@/layouts/LayoutCustom";
import { themes, ThemeName } from "@/themes/themes";
import dataProviderFactory from "@/providers";
import { authProvider } from "@/providers/authProvider";
import { i18nProvider } from "@/providers/i18nProvider";
import store from "@/stores/index";
import status from "@/containers/status/index";
import PageDefault from "@/containers/status/components/PageDefault";
import Footer from "./containers/Footer";

const App = () => {
  const [themeName] = useStore<ThemeName>("themeName", "soft");
  const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
  const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;

  return (
    <Admin
      layout={CustomLayout}
      dataProvider={dataProviderFactory("",)}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      lightTheme={lightTheme}
      darkTheme={darkTheme}
    >
      <Resource name="status" {...status} />
      <CustomRoutes>
        <Route path="/status/default" element={<PageDefault />} />
      </CustomRoutes>
    </Admin>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
    <Footer />
  </Provider>
);

export default AppWrapper;
