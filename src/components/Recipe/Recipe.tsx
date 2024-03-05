import s from './Recipe.module.scss'
import recipe from '../../assets/images/pizza.jpg'

export default function Recipe() {
  return (
    <div className={s.recipe}>
        <div className={s.imgContainer}>
            <img src={recipe} alt="recipe" />
        </div>
        <div className={`${s.recipeContent} d-flex flex-row justify-content-center align-items-center`}>
            <h3>Titre de la recette</h3>
        </div>
    </div>
  )
}
