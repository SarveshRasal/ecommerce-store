import {list} from '@vercel/blob';
import Image from 'next/image';

export async function Images() {
    async function allImages() {
        return await list();
    }
    const images = await allImages();

    return (
        <section>
            {images.blobs.map((image) => (
                <Image
                    priority
                    key={image.pathname}
                    src={image.url}
                    alt="Image"
                    width={200}
                    height={200}
                />
            ))}
        </section>
    );
}