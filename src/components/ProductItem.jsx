import { Card } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
const ProductItem = ({ title, imgUrl }) => {
  console.log(title, imgUrl)
  return (
    <Card className="h-75">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-14">
          <span className="text-xs">{title}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default ProductItem
