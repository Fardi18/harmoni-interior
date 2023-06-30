import "./Components.css";

const ProductCard = (props) => {
  return (
    <div className="col">
      <div className="card-product">
        <img src={props.img} alt="" className="img-fluid" />
        <h5 className="text-center">{props.name}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
