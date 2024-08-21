import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";

const ProductsShowcase = () => {
    const [page, setPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [limit, setLimit] = useState(10); // Number of products per page
    const [sort, setSort] = useState('createdAt');
    const [order, setOrder] = useState('desc');
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const { data, isLoading, isError } = useQuery({
        queryKey: ['products', page, limit, sort, order, searchTerm, category],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/products', {
                params: { page, limit, sort, order, search: searchTerm, category }
            });
            return res.data;
        }
    });

    const handleNextPage = () => {
        if (data.currentPage < data.totalPages) setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    if (isLoading) return <div className='h-screen w-screen flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>;
    if (isError) return <div>Error loading products</div>;

    return (
        <div className="container mx-auto my-10 px-5">
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search Products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full mb-5"
            />

            <div className='flex gap-6'>
                {/* Category Filter */}
                <select onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full mb-5">
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    {/* Add more categories as needed */}
                </select>

                {/* Sort Dropdown */}
                <select onChange={(e) => setSort(e.target.value)} className="select select-bordered w-full mb-5">
                    <option value="createdAt">Sort by Date</option>
                    <option value="price">Sort by Price</option>
                    <option value="ratings">Sort by Ratings</option>
                </select>

                {/* Order Toggle */}
                <select onChange={(e) => setOrder(e.target.value)} className="select select-bordered w-full mb-5">
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </div>

            {/* Product Grid */}
            <h1 className="text-base-300">{data.products.length} Products Found</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    data.products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-5 text-base-300">
                <button onClick={handlePreviousPage} disabled={page === 1} className="btn btn-primary mx-2 btn-sm">Previous</button>
                <span>Page {data.currentPage} of {data.totalPages}</span>
                <button onClick={handleNextPage} disabled={page === data.totalPages} className="btn btn-primary mx-2 btn-sm">Next</button>
            </div>
        </div>
    );
};

export default ProductsShowcase;