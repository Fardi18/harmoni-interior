import ProductCard from "./ProductCard";
import MarmerPVCList from "./MarmerPVCtList";

const ProductMarmerPVC = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {MarmerPVCList.map((item, index) => {
          return <ProductCard key={index} img={item.img} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductMarmerPVC;
