import { useState } from "react";
import Dropdown from "./Dropdown";
import { WeatherCarousel } from "./WeatherCarousel";

export const WeatherReport = () => {
  const [numDaysSelected, setNumDaysSelected] = useState(false);
  const [numDays, setNumDays] = useState(-1);
  const [zipcode, setZipcode] = useState(11214);

  const handleDaysSelection = (numDays, changeNumDaysSelection) => {
    changeNumDaysSelection(numDays);
    setNumDaysSelected(true);
    setNumDays(numDays);
  }


  return (
    <>
      <label htmlFor="zipcode">Zipcode (5 characters only):</label>
      <input type="text" id="zipcode" name="zipcode" required minLength="5" maxLength="5" size="2" onChange={(e) => setZipcode(e.target.value)} />
      <Dropdown handleDaysSelection={handleDaysSelection}/>
      {numDays > 0 ? <WeatherCarousel 
                        numDays={numDays}
                        zipCode={zipcode}
                      /> 
        : null}
    </>
  )
}
