import React from "react";
import Web3 from "web3";

const home = () => {
  let web3;

  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const vm = vendingMachineContract(web3);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };
  return <div>
    <button onClick={connectWalletHandler}> Connect </button>
  </div>;
};

export default home;
