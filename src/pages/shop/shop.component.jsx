import React from "react";
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    }
    unsubscribeFromSnapShot = null;

    componentDidMount() {
        console.log('..................');
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
            async snapshot => {
                console.log(snapshot);
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                console.log(collectionsMap);
                updateCollections(collectionsMap);
                this.setState({isLoading: false});
            }
        );
        
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>} />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>} />
                </Switch>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null,mapDispatchToProps)(ShopPage);
