import {Carousel} from 'react-bootstrap'
import {products} from '../products.json'
import '../asset/home.css'
function Home() {
    return (
        <div id="home">
            <Carousel id="product-carousel">
                {products.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                            src={item.image}
                            alt={item.name}
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                        </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Home;