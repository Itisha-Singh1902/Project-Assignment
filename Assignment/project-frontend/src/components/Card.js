import './Card.css';
const Card = (props) =>{
    const openDialog = () => {
        props.ViewOnClick(props);
    }
    return (
        <div className="card" onClick={()=>{openDialog()}}>
            <div className="inCard">
            <div className="cardMain">
            <div className='infoBox'>
                <p className='headText' >Title</p>
                <p className='title'>{props.title}</p>
            </div>
            <div className='cardDiv'>
                <p className='headText'>Project.Technologies</p>
                <p className='mainText'>{props.technologies?.slice(0, 35)}{props.technologies?.length>35?'...':''}</p>
            </div>
            <div className='cardDiv'>
                <p className='headText'>Technical_Skillset.Frontend</p>
                <p className='mainText'>{props.frontend?.slice(0, 35)}{props.frontend?.length>35?'...':''}</p>
            </div>
            <div className='cardDiv'>
                <p className='headText'>Technical_Skillset.Backend</p>
                <p className='mainText'>{props.backend?.slice(0, 35)}{props.backend?.length>35?'...':''}</p>
            </div>
            <div className='cardDiv'>
                <p className='headText'>Technical_Skillset.Databases</p>
                <p className='mainText'>{props.databases===undefined?'-':props.databases}</p>
            </div>
            <div className='cardDiv'>
                <p className='headText'>Technical_Skillset.infrastructure</p>
                <p className='mainText'>{props.infrastructure===undefined?'-':props.infrastructure}</p>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Card;