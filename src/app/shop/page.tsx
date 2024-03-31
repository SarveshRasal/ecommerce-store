import NavBar from "@/components/NavBar";
import connectMongo from "../../../utils/connectMongo";
import product from "../../../models/productModel";
import SearchAndFilter from "@/components/Search And Filter";

const dark_green = '#40513B';

export default async function shop() {

    await connectMongo()

    const Products = await product.find({});

    Products.forEach(product => {
        console.log(product.ImageURL.toString());
    });

    return (
        <div className={`bg-[#EDF1D6] h-fit min-h-screen`}>
            <NavBar displayHome={true}></NavBar>
            <SearchAndFilter></SearchAndFilter>
        </div>
    )
}