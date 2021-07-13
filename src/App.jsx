import React, { useEffect } from "react";
import BigNumber from "bignumber.js";
import Nav from "./Nav/nav";
import Background from "./body/background";
import Farms from "./body/farms/index";
import Footer from "./Footer";
import { useWallet } from "@binance-chain/bsc-use-wallet";
//import { ResetCSS } from '@pancakeswap-libs/uikit'
import { useFetchPublicData } from "./state/hooks";
//import Web3 from "web3";
//import getWeb3 from "./utils/web3Utils";
//import Util from "./utils/aprLib/index.js";
//import nativeFarmAbi from "./utils/nativeFarmAbi.js";
//import useWeb3 from "./hooks/useWeb3";

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80
});

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  const { account, connect } = useWallet();
  //const isMobile = useMediaQuery({ query: `(max-width: 1130px)` })
  useEffect(() => {
    if (!account && window.localStorage.getItem("accountStatus")) {
      connect("injected");
    }
  }, [account, connect]);

  useFetchPublicData();

  return (
    <div className="App">
      <main className="app preload">
        <Nav />
        <Background />
        <Farms />
        <Footer />
      </main>
    </div>
  );
};

export default React.memo(App);
