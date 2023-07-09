import { useCartContext } from "../context/CartContext";
import prodctItem from "../data/products.json";
import { Stack, Button } from "react-bootstrap";

type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeItem } = useCartContext();
  const product = prodctItem.find((item) => item.id === id);

  if (product == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex">
      <img
        src={product?.imgUrl}
        alt={product?.title}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />
      <div className="me-auto text-dark">
        <div>
          {product?.title}
          {qty > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              {qty}
            </span>
          )}
        </div>
        <div>{product.price * qty}</div>
        <Button
          variant="outline-dark"
          size="sm"
          onClick={() => removeItem(product.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
