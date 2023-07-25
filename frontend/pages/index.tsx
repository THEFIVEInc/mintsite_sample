import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Image from 'next/image';
import Seo from './components/Seo';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundImage from './components/BackgroundImage';

const Home: NextPage = () => {

  const [mintNum, setMintNum] = useState(0);
  const [mintQuantity, setmintQuantity] = useState(1);
  const [disabledFlag, setDisabledFlag] = useState(false);
  const abi = [
    'function totalSupply() public view virtual override returns (uint256)',
    "function mint(uint _mintAmount) public payable",
  ]
  const contractAddress = ""
  useEffect(() => {
    const setSaleInfo = async() =>{
      const provider = await new ethers.providers.Web3Provider((window as any).ethereum);
      const signer =  await provider.getSigner();
      const contract =await new ethers.Contract(contractAddress, abi, signer);

      try{
        const mintNumber = (await contract.totalSupply()).toString();
        console.log('mintNumber = ' + mintNumber);
        setMintNum(mintNumber);
      }catch(e){
        console.log(e);
      }
    };
    setSaleInfo();
  });

  // ミントボタン用
  function MintButton() {
    async function addChain() {
      try{
        await (window as any).ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        });
        const provider = await new ethers.providers.Web3Provider((window as any).ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = await provider.getSigner();
        setDisabledFlag(true);
      } catch(e) {
        console.log(e);
      }
      try{
        await (window as any).ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x1',
            chainName: 'Ethereum',
            nativeCurrency: {
              name: 'ETH',
              symbol: 'ETH',
              decimals: 1,
            },
            rpcUrls: ['https://mainnet.infura.io/v3/4b6dad592948471b9a0111272f1f5090'],
          }],
        });
        console.log('try');
        setDisabledFlag(true);
      }catch(Exeption){
        console.log('Ethereum already Connected');
        console.log('catch');
      }finally{
        console.log('finally');
      }
    }
    const mintQuantityPlus = async () =>{
      if(mintQuantity == 4){
        return;
      } else {
        setmintQuantity(mintQuantity + 1);
      }
    };

    const mintQuantityMinus = async () =>{
      if(mintQuantity == 1){
        return;
      } else {
        setmintQuantity(mintQuantity - 1);
      }
    };
    
    const nftMint = async() => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const signer = provider.getSigner();
      await provider.send('eth_requestAccounts', []);
      const tokenPrice = '0.01';
      const quantity = String(mintQuantity);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try{
        await contract.mint(quantity,{value: ethers.utils.parseEther(tokenPrice),gasLimit: 91000});
        alert('Starting to execute a transaction');
      }catch(err: any) {
      // JSONへ変換
        const jsonData = JSON.stringify(err.reason);
        alert(jsonData);
      }
    };
    return <>
    <BackgroundImage imageUrl="http://thefive.co.jp/wp-content/uploads/backgrand-e1689127269578.png">
    <div className="bg-transparent pb-16 flex flex-wrap buttom justify-center">
    <div className='px-8 pt-8 lg:px-28 lg:py-28'>
  <div style={{ marginTop: '10px' }}>
    <Image className="min-w-full" src="/main_grap.png" alt="Main Image" width={520} height={520}/>
  </div>
</div>
<div className="m-12 lg:m-32 px-12 py-6 lg:pt-8 lg:px-20 border-2 bg-black bg-opacity-30 text-center border-[#052ED9] bg-center bg-contain bg-no-repeat">
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-2 text-white font-['Impact']">SEINA NFT</h1>
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-5 text-white font-['Impact']"> {mintNum} / 333</h1>
        <a className="text-2xl lg:text-4xl pt-2 lg:pt-8 lg:pb-2 text-white font-['Impact']">AL2</a><a className="text-2xl lg:text-3xl pt-2 lg:pt-8 lg:pb-8 text-[#052ED9] font-['Impact'] ">MAX</a><br/>
        <a className="text-2xl lg:text-4xl pt-2 lg:pt-8 lg:pb-2 text-white font-['Impact']">PUBLIC</a><a className="text-2xl lg:text-3xl pt-2 lg:pt-8 lg:pb-8 text-[#052ED9] font-['Impact'] ">Unlimited</a><br/>
        <h1 className="text-2xl lg:text-4xl pt-2 lg:pt-4 lg:pb-2 text-white font-['Impact']">0.04 ETH</h1>

        <div className="pt-2 lg:pt-6 pb-11">
          <button type="button" className="text-2xl lg:text-3xl inline-flex flex-shrink-0 justify-center items-center gap-2 h-[1.375rem] w-[1.375rem] lg:h-[2.375rem] lg:w-[2.375rem]
          border-[#FFFFFF] border-transparent font-['Impact'] bg-[#052ED9] text-[#FFFFFF] hover:text-[#052ED9] hover:bg-[#FFFFFF] focus:outline-none focus:ring-2
          focus:ring-[#052ED9] focus:ring-offset-2 transition-all  rounded-full dark:focus:ring-offset-gray-800" onClick={mintQuantityMinus}>
          -</button>
          <a className="text-2xl lg:text-3xl px-8 lg:pt-6 lg:pb-8 text-white font-['Impact']">{mintQuantity}</a>
          <button type="button" className="text-2xl lg:text-3xl inline-flex flex-shrink-0 justify-center items-center gap-2 h-[1.375rem] w-[1.375rem] lg:h-[2.375rem] lg:w-[2.375rem]
          border-[#FFFFFF] border-transparent rounded-full font-['Impact'] bg-[#052ED9] text-[#FFFFFF] hover:text-[#052ED9] hover:bg-[#FFFFFF] 
          focus:outline-none focus:ring-2 focus:ring-[#052ED9] focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" onClick={mintQuantityPlus}>
          +</button><br/>
        </div>
        { (!disabledFlag) && <button type="button" className="text-xl lg:text-2xl py-1 lg:py-3 px-12 lg:px-24 inline-flex justify-center items-center gap-2 rounded-full border border-transparent
        bg-[#E1381D]  font-['Impact'] text-[#FFFFFF] hover:yellow-500 hover:bg-[#403940] hover:text-[#FFFFFF] hover:border-[#FFFFFF]
          focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" onClick={() => addChain()}>
        CONNECT WALLET</button>}
        { (disabledFlag) && <button type="button" className="text-xl lg:text-2xl py-1 lg:py-3 px-12 lg:px-24 inline-flex justify-center items-center gap-2 rounded-full border border-transparent
        bg-[#FFFFFF] border-yellow-200 font-['Impact'] text-[#052ED9] hover:yellow-500 hover:bg-[#052ED9] hover:text-[#FFFFFF] hover:border-[#FFFFFF]
          focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800" onClick={() => nftMint()}>
        MINT NOW</button>}
        <div className="justify-center px-2 flex">
</div>
      </div>
    </div>
    
    </BackgroundImage>
    </>
  }
  return (
    <div>
      <Seo
          pageTitle={'SEINA NFT'}
          pageDescription={'SEINA NFT'}
          pageImg={''}
          pageImgWidth={1920}
          pageImgHeight={1005}
      />
      <Header />
      <MintButton/>
      <Footer />
    </div>
    
  );
};

export default Home;
