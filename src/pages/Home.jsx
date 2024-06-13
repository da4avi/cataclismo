import affImage from '../assets/images/aff.jpg';
import Card from '../components/Card';

export default function Home() {
    return (
        <div className="p-4" style={{ backgroundColor: '#697364' }}>
            <h1 style={{ textAlign: 'center', color: 'white', textShadow: '0px 0px 10px white'}}>Produtos em destaque</h1>
            <br />
            <div className='container' style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div className='row'>
                    <div className='col'>
                        <Card
                            image={affImage}
                            title="T-Shirt Affliction"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        ></Card>
                    </div>
                    <div className='col'>
                        <Card
                            image={affImage}
                            title="T-Shirt Affliction"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        ></Card>
                    </div>
                    <div className='col'>
                        <Card
                            image={affImage}
                            title="T-Shirt Affliction"
                            text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        ></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}