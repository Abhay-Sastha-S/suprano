import '../stylesheets/ServicesGrid.css'
import { ser_items } from '../Items'

const ServicesGrid = () => {
    return(
        <div className='serGrid-Wrapper'>
            {
                ser_items.map((el,index)=>(
                    <div className="card" key={index}>
                        <div className="card__content">
                            
                            <div className="card__front" style={{backgroundImage:`url(${el.image})`}}>
                            <h3 className="card__title">{el.title}</h3>
                            <p className="card__subtitle"></p>
                            </div> 
                            
                            <div className="card__back">
                            <p className="card__body">{el.desc}</p>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ServicesGrid