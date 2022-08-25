import { Button, Card } from 'react-bootstrap';

import { IStoreItem } from '../interfaces/StoreItem';
import { formatCurrency } from '../utils/formatCurrency';

const StoreItem = ({ id, name, price, imgUrl }: IStoreItem) => {
  const qty = 1;

  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height="200px" className="rounded" style={{ objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-danger">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <Card.Footer className="">
        <div className="d-flex justify-content-center">
          {qty === 0 ? (
            <Button className="w-50" variant="warning">
              Buy Now
            </Button>
          ) : (
            <div className="d-flex justify-content-around">
              <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
                <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                  <Button variant="warning" size="sm">
                    -
                  </Button>
                  <span>{qty}</span>
                  <Button variant="warning" size="sm">
                    +
                  </Button>
                </div>
              </div>
              <Button variant="danger" size="sm" className="ml-5">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default StoreItem;
