import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductCard = (props) =>{

    const { image, id, name,price,dampingRate, increase, decrease, amount} = props

    
    return ( 
        <Card className='d-flex row mb-3 justify-content-center align-items-center' style={{ width: '32rem' }}>
        <Row>
        <Col >   
        <Card.Img style={{width:"90%"}} variant="top" src={image} />
        </Col>

        <Col > 
        <Card.Body className='align-items-center '>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='d-flex align-items-center'>
        <h2>${price} </h2><small className='mx-3' ><del>
         ${( price/dampingRate ).toFixed(2) }
         </del> </small>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button variant="primary" className='px-3' onClick={()=> decrease(id)}>-</Button>
        <h3>{amount}</h3>
        <Button className='px-3' variant="primary" onClick={()=> increase(id)}>+</Button>
        </div>
            
            <div className=' d-flex  mt-3 justify-content-center '> 
        <Button style={{width:"100%"}} variant='danger' >Remove</Button>
        </div>
      </Card.Body>
      </Col>
      </Row>
    </Card>
    )
}

export default ProductCard