import React from 'react';

export default class EditItemView extends React.Component {
  constructor(props) {
    super(props);

    this.addIngredient = this.addIngredient.bind(this);
    this.addStep= this.addStep.bind(this);
    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.resetForm = this.resetForm.bind(this);

    let recipe;
    if(this.props.match.params.id) {
      recipe = this.props.recipes.filter(val => val.id === parseInt(this.props.match.params.id))[0];
    }
    this.state = {
      id: (recipe ? recipe.id : undefined),
      name: (recipe ? recipe.name : ''),
      category: (recipe ? recipe.category : ''),
      description: (recipe ? recipe.description : ''),
      ingredients: (recipe ? recipe.ingredients : []),
      directions: (recipe ? recipe.directions : [])
    }
    this.initialState = JSON.parse(JSON.stringify(this.state));
  }
  addIngredient(ingredient) {
    const ingredients = this.state.ingredients;
    ingredients.push(ingredient);
    this.setState({ ingredients });
  }
  addStep(step) {
    const directions = this.state.directions;
    directions.push(step);
    this.setState({ directions });
  }
  handleAddRecipe() {
    const recipe = {
      id: this.state.id,
      name: this.refs.name.value,
      category: this.refs.category.value,
      description: this.refs.description.value,
      ingredients: this.state.ingredients,
      directions: this.state.directions
    };
    this.props.add(recipe);
  }
  resetForm() {
    this.state = this.initialState;
    this.refs.name.value = this.state.name;
    this.refs.category.value = this.state.category;
    this.refs.description.value = this.state.description;
    if(!this.props.isNew)
      this.handleAddRecipe();
  }
  render() {
    return (
      <div className='edit-form'>
        <h2 className='edit-form-header'>Edit Recipe</h2>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' ref='name' defaultValue={this.state.name}/>
        </div>

        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <input type='text' ref='category' defaultValue={this.state.category}/>
        </div>

        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea ref='description' defaultValue={this.state.description}/>
        </div>

        <div className='form-group'>
          <label htmlFor='ingredients'>Ingredients</label>
          <ul className='ingredients-list'>
            {this.state.ingredients.map((ingredient, i) => {
              return (
                <li key={i}>
                  <span className='ingredient-info'>{ingredient.quantity}</span>
                  <span className='ingredient-info'>{ingredient.unit}</span>
                  <span className='ingredient-info'>{ingredient.item}</span>
                </li>
              );
            })}
          </ul>
          <div className='ingredients-inputs'>
            <div className='inline-group'>
              <label htmlFor='ingredient-quantity'>Quantity</label>
              <input className='ingredient-field ingredient-quantity' type='number' ref='ingredientQty'/>
            </div>
            <div className='inline-group'>
              <label htmlFor='ingredient-unit'>Unit</label>
              <input className='ingredient-field ingredient-unit' type='text' ref='ingredientUnit'/>
            </div>
            <div className='inline-group'>
              <label htmlFor='ingredient-ingredient'>Ingredient</label>
              <input className='ingredient-field ingredient-item' type='text' ref='ingredient'/>
            </div>
            <br/>
            <button className='button button--add-ingredient' onClick={(e) => {
              e.preventDefault();
              this.addIngredient({
                quantity: this.refs.ingredientQty.value,
                unit: this.refs.ingredientUnit.value,
                item: this.refs.ingredient.value
              });
            }}>Add Ingredient</button>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='directions'>Directions</label>
          <ol>
            {this.state.directions.map((step, i) => {
              return <li key={i} className='directions-step'>{step}</li>
            })}
          </ol>
          <div className='directions-inputs'>
            <textarea ref='directions'/>
            <button className='button button--add-step' onClick={(e) => {
                e.preventDefault();
                this.addStep(this.refs.directions.value)}}>Add Step</button>
          </div>
        </div>
        <div className='submit-buttons'>
          <button className='button button--cancel' type='button'
            onClick={() => {
              this.resetForm();
              this.props.history.goBack();
            }}>Cancel
          </button>
          <button className='button button--save' type='submit'
            onClick={() => {
              this.handleAddRecipe();
              this.props.history.push('/');
            }}>Save Recipe
          </button>
        </div>
      </div>
    )
  }
}
