import React from 'react'
import '../menu-item/menu-item.styles.scss'
export default function Menuitem({title,imageUrl,size}) {
    return (
        <div className={`menu-item ${size}`} >
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>

            
                    <div className="content">
                        <h1 className='title'>{title.toUpperCase()}</h1>
                        <span className='subtitle'>SHOP Now</span>
                    </div>
                </div>
    )
}