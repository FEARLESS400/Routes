import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Produit = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  min-height: 480px;
`;


function Product({ img, title, price, detail, panie }) {
    
  return (
    <>
    <div>
        <Produit className="card">
          <div className="card-header">
            <Link to={detail}>
              <img src={img} alt="" className='card-img-top' style={{minHeight: '250px'}}/>
            </Link>
          </div>
            <div className='card-body' >
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">
                    {price}
                </p>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to={detail} className="btn btn-primary" style={{width: '45%'}}>
                  Voir details
                </Link>
                <Link to={panie} className="btn btn-primary" style={{width: '45%', backgroundColor: 'green', fontStyle: 'italic'}}>
                  Ajouter au panie
                </Link>
            </div>
        </Produit>
    </div>
    </>
  );
};

export default Product;

