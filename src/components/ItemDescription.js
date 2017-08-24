import React from 'react';

import SectionHeader from './SectionHeader';

export default class ItemDescription extends React.Component {
  render() {
    return (
      <div className='recipe-section'>
        <SectionHeader text='Description' />
        <p className='section-text'>
          {this.props.data}
        </p>
      </div>
    );
  }
}
