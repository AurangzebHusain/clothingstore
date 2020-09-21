import React from 'react'
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';

export default class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render() {
        const {collections}=this.state; 
        return (
            <div className="shoppage">
                {collections.map(({id,...otherCollections})=>(
                    <CollectionPreview key={id}  {...otherCollections}/>
                ))}
                
            </div>
        )
    }
}
