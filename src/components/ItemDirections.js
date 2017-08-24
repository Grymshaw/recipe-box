import React from 'react';

import SectionHeader from './SectionHeader';

export default class ItemDirections extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className='recipe-section'>
        <SectionHeader text='Directions' />
        <ol>
          {data.map((step, i) => {
            return <li key={i} className='directions-step'>{step}</li>
          })}
        </ol>
      </div>
    );
  }
}
