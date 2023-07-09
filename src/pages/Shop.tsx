import Product from "../components/Product";
import productItems from "../data/products.json";
import { Row, Col  } from "react-bootstrap";

const Shop = () => {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {productItems.map((item) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shop;
