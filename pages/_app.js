import { TransactionProvider } from "@/context/tansactionContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}
