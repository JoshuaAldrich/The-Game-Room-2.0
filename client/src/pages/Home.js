import React from 'react';
import { Button, Card} from 'react-bootstrap';
import Logo from "../images/Logo.png"

const Home = () => {
    return (
        <div className='Home'>
            <div className='col-12 p-5 m-5 border border-danger rounded border border-4 bg-warning'>
            <Card style={{Logo}}>
                <Card.Img src="images" />
                <Card.Body>
                    <Card.Title>
                        Welcome to the Game room!
                    </Card.Title>
                    <Card.Text>
                        lorem ismpdp asa dsa dsad ksad klasn dsandaslnd
                        lorem ismpdp asa dsa dsad ksad klasn dsandaslnd
                        lorem ismpdp asa dsa dsad ksad klasn dsandaslnd
                        lorem ismpdp asa dsa dsad ksad klasn dsandaslnd
                    </Card.Text>
                    <Button variant='primary'>Click</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Home;