import { useState } from "react"
import type { FilterKey } from "../../assets/types.ts"

export default function RecipesFilter({
  handleChangeFilter,
  searchParams,
  handleLikedRecipesClick,
}: {
  handleChangeFilter: (key: FilterKey, value?: string | number) => void
  searchParams: URLSearchParams
  handleLikedRecipesClick: () => void
}) {
  const initialFilter = {
    difficulty: searchParams.get("difficulty") ?? "",
    duration: searchParams.get("duration") ?? "",
    type: searchParams.get("type") ?? "",
  }
  const [filter, setFilter] = useState(initialFilter)

  const filterClearBtn = (
    <button
      className="filter-clear"
      onClick={() => {
        setFilter({
          difficulty: "",
          duration: "",
          type: "",
        })
        handleChangeFilter("clear")
      }}
    >
      Clear filters
    </button>
  )

  return (
    <>
      <div className="recipes-filter">
        <select
          name="filter"
          value={filter.difficulty}
          onChange={(event) => {
            handleChangeFilter("difficulty", event.target.value)
            setFilter((prevState) => ({
              ...prevState,
              difficulty: event.target.value,
            }))
          }}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select
          name="filter"
          value={filter.duration}
          onChange={(event) => {
            handleChangeFilter("duration", event.target.value)
            setFilter((prevState) => ({
              ...prevState,
              duration: event.target.value,
            }))
          }}
        >
          <option value="">Select Max Duration</option>
          <option value="60">1 hour</option>
          <option value="240">4 hours</option>
          <option value="360">6 hours</option>
        </select>
        <select
          name="filter"
          value={filter.type}
          onChange={(event) => {
            handleChangeFilter("type", event.target.value)
            setFilter((prevState) => ({
              ...prevState,
              type: event.target.value,
            }))
          }}
        >
          <option value="">Select Type</option>
          <option value="sweet">Sweet</option>
          <option value="savoury">Savoury</option>
        </select>
        {searchParams.size ? filterClearBtn : ""}
      </div>
      <div className="side-filter">
        <button className="liked-recipes-btn" onClick={handleLikedRecipesClick}>
          Liked Recipes
        </button>
      </div>
    </>
  )
}
