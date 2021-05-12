//Lesson 191: container pattern:

import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.page";
import collectionPage from "./collection.page";

const mapStateToProps = createStructuredSelector({
   isLoading: (state) => !selectIsCollectionsLoaded(state),
});

//Notice how containers don't render anything, they just pass props down to components:
const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(collectionPage);

export default CollectionPageContainer;
