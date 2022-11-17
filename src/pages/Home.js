import React from "react";
//import WalletButton from "../components/WalletButton/WalletButton";
//import WalletClient from "../components/WalletClient/WalletClient";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Collection from "../components/Collection/Collection";
import Mint from "../components/Mint/Mint";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const dataNav = [
  { pageName: "Home", route: "." },
  { pageName: "Mint", route: "#collection" },
  { pageName: "Team", route: "#team" },
  { pageName: "FAQ", route: "#FAQ" },
];

const dataFAQ = [
  {
    question: "What is this project really about?",
    show: 'false',
    answer:
      "By minting a NFT you're adopting a virtual bunny. All of that money is going directly to a organization that needs financial support to garantize that every bunny in that organization has everything they need to find their forever home.",
  },
  {
    question: "Does adopting a virtual bunny means I have an actual bunny?",
    show: 'false',
    answer:
      "Sadly, no. But if you're interested you can always check the organizations we help and there you can actually adopt a bunny. Hope you find your dreamy bunny.",
  },
  {
    question: "Who's on the team?",
    show: 'false',
    answer:
      "Hi, my name is Camila! I am a student of Multimedia Technology and I've developed and designed this project from scratch. Feel free to give me your feedback.",
  },
  {
    question: 'What is "Minting a NFT"?',
    show: 'false',
    answer:
      "\"Non-Fungible Tokens\" are one-of-a-kind tokens that represent a unique good or asset, like digital art. They can be sold in auctions for collectors to bid on or purchase, and the sale of NFTs unlocks new revenue streams for creators. In order to mint an NFT you'll need to have a Web3 wallet such as Metamask and you'll need to have some Ethereum (ETH) in it. You can buy ETH on exchanges like CoinBase, Gemini, Binance, KuCoin, and more, and then transfer the ETH to your Metamask wallet. You can also buy ETH directly on Metamask.",
  },
];

const Home = () => {
  return (
    <>
      <Header dataNav={dataNav} />
      <Hero />
      <Collection />
      <Mint />
      <Team />
      <FAQ dataFAQ={dataFAQ} />
      <Footer />
    </>
  );
};

export default Home;
