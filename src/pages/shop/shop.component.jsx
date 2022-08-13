import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/preview-collection.component.jsx';
import SHOP_DATA from './shop.data.js'

export default class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionItems}) => (
                        <CollectionPreview key={id} {...otherCollectionItems} />           
                    ))
                }
            </div>
        )
    }
}
