
import Nav from './compenents/nav';
import Product from './compenents/product';
import Fouter from './compenents/fouter';


function Dashboard({ data }) {

  return (
    <>
      <Nav />

      <div className='container vh-100 pt-5'>
        <div className='d-flex justify-content-center flex-wrap gap-4 '>
          {
            data.map((p) => (
              <Product 
                key={p.id} 
                img={p.img} 
                title={p.title} 
                price={p.price} 
                detail={`/produit/${p.id}`}
                panie={`/panie`}
              />
            ))
          }
        </div>
      </div>

      <Fouter />
    </>
  )
}

export default Dashboard;
