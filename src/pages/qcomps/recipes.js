export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];


// {return <div> </div>} equals to <div> </div> 
export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>      
      { 
      recipes.map((recipe) =>
        { return <div key={recipe.name}> 
        <h2>{recipe.name}</h2>
        {
          <ul>
            {Array.from(recipe.ingredients).map((ingredient,index)=>
             
              <li key={ingredient+index}>
                {ingredient}
              </li>
            
            )}
          </ul>
        }
        </div>
        }
        )
      }
    </div>
  );
}
