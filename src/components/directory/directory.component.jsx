import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import './directory.styles.scss';

import MenuItem from '../../components/menu-item/menu-item.component';

const Directory = ({ sections }) => {
  console.log(sections);
  return (
  <div className="directory-menu">
  {
    sections.map(({ title, imageUrl, size, history, linkUrl, match} ) => (
        <MenuItem title={title} imageUrl={imageUrl} size={size} history={history} linkUrl={linkUrl} match={match}/>
    ))
  }
  </div>
);};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);