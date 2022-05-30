import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/historyCard.css";
import "../styles/sideNav.css";
import "../styles/login.css";
import "../styles/home.css";
import "../styles/transfer.css";
import "../styles/profile.css";
import "../styles/change.css";
import { wrapper, store } from "../stores/index";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
