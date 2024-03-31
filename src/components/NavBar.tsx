const dark_green = 'text-[#40513B]'

interface NavBarProps {
    displayHome: boolean;
}

export default function NavBar({displayHome} : NavBarProps) {
    return(
        <header className={'h-[6.75vh] flex flex-row justify-between border-b-[1px] border-[#40513B]'}>
            <div>
                <a href={'/shop/'} className={`inline-flex w-[12.5vw] ${dark_green} justify-center h-[6.75vh] items-center border-[1px] border-[#40513B]`}>Shop</a>
                <a href={'/contact'} className={`inline-flex w-[12.5vw] ${dark_green} justify-center h-[6.75vh] items-center border-[1px] border-[#40513B] border-l-0`}>Contact</a>
            </div>
            {displayHome && (<div>
                <a href={'/'} className={`font-bold ${dark_green} text-3xl justify-center items-center inline-flex h-[6.75vh]`}>Aether Emporium</a>
            </div>)}
            <div>
                <a href={'/Sign In'} className={`inline-flex w-[12.5vw] ${dark_green} justify-center h-[6.75vh] items-center border-[1px] border-[#40513B]`}>Sign In</a>
                <a href={'/Cart'} className={`inline-flex w-[12.5vw] ${dark_green} justify-center h-[6.75vh] items-center border-[1px] border-[#40513B] border-l-0`}>Cart</a>
            </div>
        </header>
    )
}