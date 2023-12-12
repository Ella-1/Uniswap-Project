import "../styles/globals.css"
import { TransactionProvider } from "../context/tansactionContext";

export default function App({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}
