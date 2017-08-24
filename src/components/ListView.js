import { Link } from 'react-router-dom';
import React from 'react';

import ListItem from './ListItem';

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       recipes: this.props.recipes
    };
  }
  render() {
    const recipes = this.state.recipes;
    return (
      <div className='container'>
        <div className='list-headline'>
          <h2 className='list-header'>Recipe List</h2>
          <Link to='/recipes/new/' className='button button--add-recipe'>+</Link>
        </div>
        <ol className='list'>
          {recipes.map((recipe, i) => {
            return <ListItem key={i} recipe={recipe} delete={this.props.delete}/>
          })}
        </ol>
      </div>
    );
  }
}
