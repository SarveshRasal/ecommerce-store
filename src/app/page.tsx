import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const dark_green = 'text-[#40513B]'
const light_green = 'text-[#609966]'
const lighter_green = 'text-[#9DC08B]'

export default function Home() {
  return (
    <main className={`bg-[#EDF1D6] h-screen`}>
      <NavBar displayHome={false}></NavBar>
        <div className={'h-[93.25vh] flex flex-row'}>
            <div className={'w-[50vw] pl-[2rem] pr-[2rem] relative mt-[-1.5rem]'}>
                <div className={'h-[46.625vh] pl-[1rem] top-0'}>
                    <h1 className={`text-8xl font-[600] leading-[120%] ${dark_green} tracking-wide mt-[2rem] mb-[1.5rem]`}>Aether<br/>Emporium</h1>
                    <p className={`${light_green} font-semibold tracking-wide leading-7`}>Step into the harmonious convergence of material possessions.
                        Explore the uncharted realms of possibility within the luminous aisles of
                        Aether
                        Emporium!</p>
                </div>
                <div className={'h-0 w-[42vw] mt-[-0.5rem] ml-4 border-black border-b-[1px]'}></div>
                <div className={'h-[46.625vh] flex flex-row items-center mt-[-1rem]'}>
                    <div className={'w-[100rem]'}><Image src={'/Something in Japanese.png'} width={300} height={500}
                              alt={'Logo'} layout={'responsive'}
                              ></Image></div>
                    <div className={'w-0 h-[18rem] border-black border-l-[1px] ml-[1rem]'}></div>
                    <p className={`ml-4 ${lighter_green} leading-[160%] pr-8 text-md`}>
                        In the quietude of dawn, when the world is still hushed,
                        the potter sips from a chipped mug, its imperfections a
                        testament to life’s fragility. The coffee swirls, a dark galaxy within,
                        and the potter contemplates the universe—the interplay of elements,
                        the fusion of fire and earth.
                    </p>
                </div>
            </div>
            <div className={'w-[50vw] pl-[2rem] pr-[2rem] relative'}>
                <div className={`flex w-[50vw] h-[46.625vh] absolute right-0 ${light_green} font-bold`}>
                    <Link rel="stylesheet"
                             href={"/shop"}
                             className={'items-center justify-center flex flex-col w-[25vw] ' +
                                 'border-black border-r-0 border-[1px] border-t-0'}>
                        <p className={'text-5xl text-center'}>Pots<br/>and<br/>Planters</p>
                        <p className={'absolute bottom-0 mb-10'}>Shop Now →</p>
                    </Link>
                    <div className={'w-[25vw] border-t-0 border-[1px] border-[#40513B] flex items-center justify-center'}>
                        <Image src={'/Pots.png'}
                               alt={'An Image of Pots'}
                               width={300}
                               height={300}></Image>
                    </div>
                </div>
                <div className={`flex w-[50vw] h-[46.625vh] absolute right-0 top-[46.625vh] ${light_green} font-bold`}>
                    <div className={'w-[25vw] border-t-0 border-r-0 border-[1px] border-[#40513B] flex items-center justify-center'}>
                        <Image src={'/Coffee.png'}
                               alt={'An Image of Coffee'}
                               width={300}
                               height={300}></Image>
                    </div>
                    <Link rel="stylesheet"
                          href={"/shop"}
                          className={'items-center justify-center flex flex-col w-[25vw] ' +
                              'border-black border-[1px] border-t-0'}>
                        <p className={'text-5xl text-center'}>Coffee<br/>and<br/>Beans</p>
                        <p className={'absolute bottom-0 mb-10'}>← Shop Now</p>
                    </Link>
                </div>
            </div>
        </div>
    </main>
  );
}
