
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
    // eslint-disable-next-line no-unused-vars, react/prop-types
    const { productName, productImage, description, price, category, ratings, creationDate } = product;
    return (
        <div className="card bg-light-light shadow-xl mx-auto">
            <div className="card-body">
                <div className="badge badge-md">{creationDate}</div>
                <h2 className="card-title text-3xl text-base-300 font-bold uppercase">{productName}</h2>
                <p className="text-xl">{description}</p>
                <div className="flex justify-between items-center text-2xl text-my_choice-yellow_800 font-bold">
                    <div>{price} $</div>
                    <div>
                        {ratings}
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-my_choice-yellow_400" />
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="badge badge-warning gap-2 uppercase">
                        {category}
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="h-96 bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${productImage})` }}>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;