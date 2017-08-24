import React from 'react';

export default class SectionHeader extends React.Component {
  render() {
    return (
      <h3 className='section-header'>
        {this.props.text}
      </h3>
    );
  }
}
