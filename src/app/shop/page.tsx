import NavBar from "@/components/NavBar";
import ProductCard from "@/components/Product Card";
export default function shop() {
    return (
        <main className={`bg-[#EDF1D6] h-screen`}>
            <NavBar displayHome={true}></NavBar>
            <ProductCard displayImage={'/Coffee.png'} displayName={'Coffee Beans'} displayPrice={'999.99'}></ProductCard>
        </main>
    )
}