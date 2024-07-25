import { useEffect } from "react";
import { useSelector } from "react-redux";
import { removeRecord } from "../utils/recordSlice";
import { useDispatch } from "react-redux";

const HighsLows = () => {
  const records = useSelector( (store) => store.records.records );

  useEffect(() => console.log(records), [records]);

  const dispatch = useDispatch();

  const handleClick = (zipcode) => {
    dispatch(removeRecord(zipcode));
  }

  return (
    <>
      <h1>HighsLows</h1>
      {typeof records === 'object' && ( // Check if records is an object
        <div>
          {Object.entries(records)
            .sort((a, b) => a[0].localeCompare(b[0])) // Sort by zipcode
            .map(([zipcode, { max, min }]) => (
              <div key={zipcode}>  {/* Use zipcode as key */}
                <h4>Zipcode: {zipcode}</h4>
                <div>Max: {max}, min: {min}</div>
                <button onClick={() => handleClick(zipcode)} type="button" className="btn btn-danger">Remove</button>
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default HighsLows