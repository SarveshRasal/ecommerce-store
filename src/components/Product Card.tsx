import Image from "next/image";
import Link from "next/link";

const dark_green = '#40513B';

interface ProductCardProp {
    displayImage: string;
    displayName: string;
    displayPrice: string;
}

export default function ProductCard({displayImage, displayName, displayPrice} : ProductCardProp) {
    return (
        <main>
            <div className={`w-[25vw] h-[46.625vh] p-5 text-[${dark_green}]`}>
                <div className={'border-[1px] border-black rounded-md w-full h-full flex items-center p-5'}>
                    <Link rel={"stylesheet"}
                          className={'flex flex-col justify-between h-full'}
                          href={`/shop/${displayName}`}>
                        <div className={'rounded md'}>
                            <Image src={'https://0vr2shuiv9jjog49.public.blob.vercel-storage.com/Rustic%20Wooden%20Barrel%20Planter-DszatqFfCoKhKuZF4dqf4IkM0308EY.png'}
                                   alt={'An Image of a Product'}
                                   width={500} height={500} layout={'responsive'}>
                            </Image>
                        </div>
                        <div>
                            <p className={"text-center font-bold text-2xl align-bottom"}>
                                {displayName}
                            </p>
                            <p className={'text-center font-bold text-md align-bottom'}>
                                ${displayPrice}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}