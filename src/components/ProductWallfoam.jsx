import ProductCard from "./ProductCard";
import WallfoamList from "./WallfoamList";

const ProductWallfoam = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {WallfoamList.map((item, index) => {
          return <ProductCard key={index} img={item.img} name={item.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductWallfoam;
