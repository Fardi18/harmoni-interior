import ProductCard from "./ProductCard";
import LantaiVinylList from "./LantaiVinylList";

const ProductLantaiVinyl = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {LantaiVinylList.map((item, index) => {
          return <ProductCard key={index} img={item.img} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductLantaiVinyl;
