import ProductCard from "./ProductCard";
import PlafonPVCtList from "./PlafonPVCtList";

const ProductPlafonPVC = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {PlafonPVCtList.map((item, index) => {
          return <ProductCard key={index} img={item.img} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductPlafonPVC;
