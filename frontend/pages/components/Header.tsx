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
                <a className="block invisible md:visible mx-1 bg-center bg-cover bg-[url('/line_icon.png')]" style={{ width: '50px', height: '50px', marginTop: '6px' }} href="https://lin.ee/wu1LI9O" target="_blank"></a>
</div>
                </div>
            </nav>
        </header>
}

export default Header;