import { Col, Row } from "react-bootstrap"
import ProductItem from "./ProductItem"

// eslint-disable-next-line react/prop-types
const Assortment = ({ title, product, handleImageChange, reorderTables }) => {
  console.log(product)
  return (
    <>
      <div className="text-bold text-lg font-bold">{title}</div>
      <Row
        md={2}
        xs={1}
        lg={5}
        className="g-3 flex-wrap"
      >
        {product.map((item) => (
          <Col key={item.id}>
            <ProductItem title={item.title} imgUrl={item.imgUrl} handleImageChange={handleImageChange} reorderTables={reorderTables}  />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Assortment
