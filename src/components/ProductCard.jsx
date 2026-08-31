import Button from "./Button";

function ProductCard({ name, price, category, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{name}</h3>
        <p className="price">
          {new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            maximumFractionDigits: 0
          }).format(price)}
        </p>
        <Button variant="primary">Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ProductCard;