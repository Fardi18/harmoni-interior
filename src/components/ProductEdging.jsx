import ProductCard from "./ProductCard";
import EdgingList from "./EdgingList";

const ProductEdging = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {EdgingList.map((item, index) => {
          return <ProductCard key={index} img={item.img} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductEdging;
