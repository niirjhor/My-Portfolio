import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Details = (props) => {

    const { id, name, details, img } = props.detail;
    return (
        <div>
            <CardGroup>
                <Card className='h-100 card-lg bg-light'>
                    <Card.Img variant="top" className="card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>

                </Card>

            </CardGroup>
        </div>

    );
};

export default Details;