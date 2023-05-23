import Image from 'next/image'

function Header() {
    return <header>
            <nav className="max-w-full lg:pt-0 bg-WHITE">
                <div className="grid grid-rows-12 grid-flow-col">
                <a href="https://wacf.hp.peraichi.com/reikokamano_nft"target="_blank">
                    <div className='justify-front flex'>
                    <img className="m-1" src="/logo.png" alt="LOGO" height="150" width="150" />
                    </div>
                </a>
                <div className="justify-end px-2 flex">
  　　　　　　　　　<div className="bg-[url('/line_icon.png')] invisible md:visible px-6 pt-2 mx-1 bg-center bg-cover" style={{ width: '50px', height: '50px', marginTop: '6px' }}>
   　　　　　　　　 <a className="px-2 py-4" href="https://opensea.io/assets/ethereum/0x240543a5d0a871f6412e540dd5a750813fbd70ad/1" target="_blank"></a>
  </div>
</div>
                </div>
            </nav>
        </header>
}

export default Header;