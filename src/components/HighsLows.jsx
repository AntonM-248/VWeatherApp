import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const HighsLows = () => {
  const dispatch = useDispatch();
  const records = useSelector( (store) => store.records.records );

  useEffect(() => console.log(records), []);

  return (
    <>
      <h1>HighsLows</h1>
    </>
  )
}

export default HighsLows