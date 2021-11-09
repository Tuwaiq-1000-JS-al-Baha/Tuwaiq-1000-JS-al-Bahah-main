import { Carousel } from "react-bootstrap"

function CarouselItem() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.natgeofe.com/n/8071137b-2890-4ded-8420-41e3485b1eb9/domestic-cat.jpg?w=1272&h=848"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.natgeofe.com/n/8071137b-2890-4ded-8420-41e3485b1eb9/domestic-cat.jpg?w=1272&h=848"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.natgeofe.com/n/8071137b-2890-4ded-8420-41e3485b1eb9/domestic-cat.jpg?w=1272&h=848"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem
