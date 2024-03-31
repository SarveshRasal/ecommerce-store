import NavBar from "@/components/NavBar";
import ProductCard from "@/components/Product Card";
import connectMongo from "../../../utils/connectMongo";
import product from "../../../models/productModel";

export default async function shop() {

    await connectMongo()

    const Products = await product.find({});
    return (
        <div className={`bg-[#EDF1D6] h-screen`}>
            <NavBar displayHome={true}></NavBar>
            <div className={'flex'}>{Products.map((product) => (
                <ProductCard key={product._id} displayImage={product.ImageURL}
                             displayName={product.Name} displayPrice={product.Price}>
                </ProductCard>
            ))}</div>
        </div>
    )
}