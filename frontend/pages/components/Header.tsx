import Image from 'next/image'

function Header() {
    return <header>
            <nav className="max-w-full lg:pt-0 bg-WHITE">
                <div className="grid grid-rows-12 grid-flow-col">
                <a href="https://wacf.hp.peraichi.com/reikokamano_nft"target="_blank">
                    <div className='justify-front flex'>
                    <img className="m-1" src="/logo.png" alt="LOGO" height="150" width="54" />
                    </div>
                </a>
                    <div className="justify-end px-2 flex">
                        <div className="bg-[url('/opensea_icon.png')] invisible md:visible px-2 pt-8 mx-1 bg-center bg-cover"><a className="px-2 py-4" href="https://opensea.io/assets/ethereum/0x240543a5d0a871f6412e540dd5a750813fbd70ad/1" target="_blank"></a></div>
                    </div>
                </div>
            </nav>
        </header>
}

export default Header;