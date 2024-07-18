import { useState } from "react";

const Dropdown = ({handleDaysSelection}) => {
  const numDays = 14;

  const [numDaysSelection, setNumDaysSelection] = useState(-1);

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {numDaysSelection < 0 ? "Select number of days" : `${numDaysSelection} days`}
      </button>
      <ul className="dropdown-menu">
        {Array.from({ length: numDays }).map((_, i  ) => (
          <li key={i}>
            <a onClick={() => {
                handleDaysSelection(i+1, setNumDaysSelection);}} className="dropdown-item" href="#">
              {`${i + 1} days`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown