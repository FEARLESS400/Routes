import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

import Nav from './compenents/nav';
import Fouter from './compenents/fouter';



const Detail = styled.div`
  width: 500px;
`;

function ProductDetails({ data }) {
    const {id} = useParams();

    const product = data.find((p) => p.id === Number(id))

    if(!product)
      return <p>product not fond</p>

  return (
    <>
    <Nav />

    <div className='d-flex justify-content-center vh-100'>
      <div>
        <h1 className='p-5'>{product.title}</h1>

        <div className='container-fluid'>
          <Detail className='d-flex justify-content-center'>
            <div className="card" style={{width: "400px"}}>
              <img src={product.img} alt="laptop" className="card-img-top p-2" />

              <div className="card-body">
                <p className="card-text">{product.price}</p>

                <Link to="/" className="btn btn-primary">
                  Back to dashboard
                </Link>
              </div>
            </div>
          </Detail>
        </div>

      </div>
    </div>
    <Fouter />
    </>
  )
}
export default ProductDetails;

