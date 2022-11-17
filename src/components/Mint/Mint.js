import React, { useState, useEffect } from "react";
import Web3 from "web3";
import {
  useAddress,
  useWalletProvider,
  useBalance,
} from "../../contexts/OnboardContext";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
import Counter from "../Counter/Counter";
import styles from "./Mint.module.css";
import NFTHero from '../../assets/NFTHero.png';
import WalletClient from '../WalletClient/WalletClient'

const Mint = () => {
  const address = useAddress();
  const balance = useBalance();
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const [userBalance, setUserBalance] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);

  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);

  useEffect(() => {
    const getPrice = async () => {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);
      console.log(myContract, factoryAbi, factoryAddress);
      const price = await myContract.methods
        .NFTPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      const valueEth = web3.utils.fromWei(`${price || 0}`, "ether"); //cambiar 5 por price

      setTokenPrice(valueEth);
    };
    getPrice();
  });

  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .NFTPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      setTokenPrice(price);

      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);

      const count = 1;

      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        count,
      };

      const total = parseInt(count) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
        .send({ from: address, value: total })
        .once("transactionHash", function (hash) {
          // setUserConfirmation(`success`);
          // setHash(hash);
          console.log("Transaction Hash", hash);
        })
        .once("receipt", function (receipt) {
          // setBlChainConfirmation(`success`);
          // setTimeout(() => {
          //   setSuccess(true);
          // }, 1000);
          console.log("Transaction Confirmed", receipt);
        })
        .on("error", function (error, receipt) {
          // handleError(error);
          console.log("Error", error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className={`${styles["mint"]}`} id="mint">
      <div className={`${styles["data"]}`}>
        <h2>I want somebunny to love</h2>
        <h3>Mint you bunny</h3>
        <img src={NFTHero} alt="A bunny" />
      </div>
      {address && (
      <div className={`wallet-client ${styles["minter"]}`}>
      <WalletClient />
        <p>Your Balance is {userBalance} eth</p>
        <p>Price per bunny {tokenPrice} eth</p>
        <Counter />
        <button disabled={!address ? true : false} onClick={handleMint}>
          Mint
        </button>
      </div>
    )}
    {!address && (
      <div className={`wallet-client ${styles["minter"]}`}>
      <WalletClient />
      </div>
    )}
    </div>
    </>
  );
};

export default Mint;
