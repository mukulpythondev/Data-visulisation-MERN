import React from 'react'
import Card from 'react-bootstrap/Card';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    const defaultGradient = "linear-gradient(135deg, #6A0DAD 0%, #61049D 100%)";
    const sectorColors = {
        Environment: 'linear-gradient(to bottom right, #76cfa9, #3f9a69)',
        Sector: 'linear-gradient(to bottom right, #f1e767, #f0db4f)',
        Energy: 'linear-gradient(to bottom right, #66b3ff, #3385ff)',
        
        'Aerospace & defence': 'linear-gradient(to bottom right, #66c2a5, #409b75)',
        Government: 'linear-gradient(to bottom right, #8da0cb, #5c6f99)',
        Manufacturing: 'linear-gradient(to bottom right, #fc8d62, #f95738)',
        Retail: 'linear-gradient(to bottom right, #8c564b, #623b2a)',
        'Financial Services': 'linear-gradient(to bottom right, #e78ac3, #d2438d)',
        'Information Technology': 'linear-gradient(to bottom right, #b3b3b3, #808080)',
       
    };

    const getSectorColor = (sector) => {
        return sectorColors[sector] || defaultGradient;
    };

    const sectorColor = getSectorColor(item.sector);
    return (
        <div className='cardDiv' >
            <Card  style={{ backgroundImage: sectorColor , width: '16rem', margin: '1.2rem',color:'white' }} >
                <Card.Body>
                    <Card.Title  style={{ color: 'black' ,fontWeight:'bolder' }}>Project Details</Card.Title>
                    <Card.Subtitle  style={{ color: 'black' ,fontWeight:'bolder'}} className="mb-2">{item.sector ? item.sector : "Sector"}</Card.Subtitle>
                    <Card.Text className='cardText'>
                        <ul>
                            <li> {item.topic ? item.topic : "No Info"} </li>
                            <li> {item.title ? item.title : "No Info"} </li>
                            <li> {item.insight ? item.insight : "No Info"} </li>
                            <li> {item.url ? item.url : "No Info"} </li>
                            <li> {item.region ? item.region : "No Info"} </li>
                            <li> {item.country ? item.country : "No Info"} </li>
                            <li> {item.source ? item.source : "No Info"} </li>
                            <li> {item.pestle ? item.pestle : "No Info"} </li>
                            <li> {item.start_year ? item.start_year : "No Info"} </li>
                            <li> {item.end_year ? item.end_year : "No Info"} </li>
                            <li> {item.added ? item.added : "No Info"} </li>
                            <li> {item.published ? item.published : "No Info"} </li>
                            <li> {item.intensity ? item.intensity : "No Info"} </li>
                            <li> {item.likelihood ? item.likelihood : "No Info"} </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardsForData