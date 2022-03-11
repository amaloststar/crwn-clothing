import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../preview-collection/preview-collection.component";

import './collections-overview.styles.scss';

class CollectionsOverview extends React.Component {

    componentDidMount() {
        console.log('in123512');
    }

    render() {
        const { collections } = this.props;
        console.log(collections);
        return (
            <div className="collections-overview">
                {
                    collections.map((({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    )))
                }
            </div>
        );

    }
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);