import Image from 'next/image'
import HeaderComp from './components/header';
import { Main } from './components/main';
// import TransactionHistory from './components/transactionHistory';

const style = {
  wrapper: `h-screen max-h-screen h-min-screen bg-[#2D242F] text-white select-none flex flex-col justify-between`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <HeaderComp />
      <Main />
     {/* <TransactionHistory /> */}
    </div>
  )
}
