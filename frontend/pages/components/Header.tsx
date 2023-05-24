import Image from 'next/image'

function Header() {
    return <header>
            <nav className="max-w-full lg:pt-0 bg-WHITE">
                <div className="grid grid-rows-12 grid-flow-col">
                <a href="https://www.samurai-studio.tokyo/"target="_blank">
                    <div className='justify-front flex'>
                    <img className="m-1" src="/logo.png" alt="LOGO" height="150" width="150" />
                    </div>
                </a>
               
                </div>
            </nav>
        </header>
}

export default Header;