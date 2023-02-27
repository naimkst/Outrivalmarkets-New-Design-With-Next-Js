import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/style.scss";
import type { AppProps } from "next/app";
import { Layouts } from "../Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
