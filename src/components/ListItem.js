import React from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends React.Component {
  render() {
    const recipe = this.props.recipe;
    return(
      <li className='list-item'>
        <div className='li-inner'>
          <Link to={`/recipes/${recipe.id}`}>
            <h2 className='item-header'>{recipe.name}</h2>
          </Link>
          <div className='recipe-actions'>
            <Link className='recipe-action' to={`/recipes/edit/${recipe.id}/`}>Edit</Link>
            |
            <span className='recipe-action' onClick={() => {this.props.delete(recipe)}}>Delete</span>
          </div>
          <p className='item-summary'>{recipe.description}</p>
        </div>
      </li>
    );
  }
}
