import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductsShowcase = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/products');
            return res.data;
        }
    })

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-base-300">{products.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5">
                {
                    products.map(product => <ProductCard key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductsShowcase;