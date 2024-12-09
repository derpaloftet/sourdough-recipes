import { NavLink } from "react-router-dom"
import breadWhite from "../../assets/bread-recipe3.jpg"
import type { Difficulty } from "../../assets/types.ts"

export default function RecipesElement({
  id,
  title,
  image,
  difficulty,
  duration,
  search,
}: {
  id: string
  title: string
  image: string
  difficulty: Difficulty
  duration: number
  search: string
}) {
  return (
    <>
      <div key={id} className="recipe-card">
        <NavLink to={id} state={{ search: search }}>
          <img
            className="recipe-image"
            src={`/src/assets/recipes/${image}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src = breadWhite
            }}
            alt="image of the recipe"
          />
        </NavLink>
        <div className="recipe-title">{title}</div>
        <div className="recipe-keywords">
          <div className="recipe-keyword">{difficulty}</div>
          <div className="recipe-keyword">{duration} minutes</div>
        </div>
        <button className="btn-like">❤</button>
        <NavLink to={id} className="recipe-btn">
          Go to Recipe Details
        </NavLink>
      </div>
    </>
  )
}
