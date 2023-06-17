import ProductsList from "./ProductsList";

import './Products.css'
const productsArr = [
    {
        id:1,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        id:5,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        id:6,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        id:7,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
    {
        id:8,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]

    const Products = (props) => {

        return (
          
          <div className="meals">
            <ul className="meals">
             {productsArr.map((item) => (
              <ProductsList
               key={item.id}
               id={item.id}
               title={item.title}
               price={item.price}
               url={item.imageUrl}
              />
            ))}
           </ul>
          </div>
        );
      };
export default Products;