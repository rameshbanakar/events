import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hello } from "../redux/action";
import Events from "../Component/Events";
import AddEvent from "./AddEvent";
function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(hello());
  }, []);
  //console.log(data)
  return (
    <div>
      <div style={{ marginBottom: "20px" }}></div>

      <div className="row">
        <div className="col">
          <AddEvent />
        </div>
        {data === null ? (
          <div className="col">
            <h3>No Events available</h3>
          </div>
        ) : (
          <div className="col">
            {data.map((d) => (
              <Events key={d.id} d={d} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
