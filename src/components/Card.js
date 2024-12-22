import React, { useState } from 'react'



const Card = ({ id, image, info, price, name, removeTour, watch }) => {

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }



    return (
        <div className='card'>
            <img alt='logo' src={image} className='image' />

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>{price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                    {/* <FontAwesomeIcon icon="fa-solid fa-video" /> */}



                    <a href={watch}>        <svg xmlns="http://www.w3.org/2000/svg" height="22px" width="40px" viewBox="0 0 176 512"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg> Watch</a>


                </div>

                <div className='description'>
                    {description}
                    {/* click hone pr change ho rha a=hai */}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button className='btn-red' onClick={() => removeTour(id)}>
                Not Interested

            </button>

        </div>
    )
}

export default Card
