import React from 'react';

import SectionHeader from './SectionHeader';

export default class ItemIngredients extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className='recipe-section recipe-section--ingredients'>
        <SectionHeader text='Ingredients' />
        <ul>
          {data.map((ingredient, i) => {
            return (
              <li key={i}>
                <span className='ingredient-quantity'>{ingredient.quantity}</span>
                <span className='ingredient-unit'>{ingredient.unit}</span>
                <span className='ingredient-item'>{ingredient.item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
