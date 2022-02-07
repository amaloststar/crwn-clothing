import React from "react";

import shopData from './shop.data';

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collections: shopData,
        }

    }

    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map((({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    )))
                }
            </div>
        );
    }
}

export default ShopPage;