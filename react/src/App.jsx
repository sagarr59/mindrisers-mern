import Todo from "./Todos.jsx"
import Product from "./components/Product"
import { title, products } from "./productsData.js"
/* let featuredProducts = products.filter((el)=>{
    if(el.featured){
        return true
    }
}) */
let featuredProducts = products.filter((el) => el.featured)

function App() {
  return (
    <>
      <Todo />
      <h1>{title}</h1>
      <div className="mainContainer">
        {/* {products
          .filter((el) => el.featured)
          .map((el, index) => {
            //filter--naya array banayo
            //map --data convert gryo

            return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
          })} */}

        {featuredProducts.map((el, index) => {
          return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
        })}
      </div>

      <br />
      <br />

      <h1>NORMAL PRODUCTS</h1>
      <div className="mainContainer">
        {/*  {products
          .filter((el) => !el.featured)
          .map((el, index) => {
            return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
          })} */}

        {products.map((el, index) => {
          return <Product key={index} title={el.title} price={el.price} discountedPrice={el.discountedPrice} description={el.description} />
        })}
      </div>
    </>
  )
}
export default App
