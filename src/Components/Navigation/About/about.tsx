import { useEffect, useReducer } from "react";
import { fetchReducer } from "../../../Utils/reducer/fetchReducer";
import { fetchReducerTypes } from "../../../Utils/reducer/fetchReducerTypes";
import { getColorsData, getSuperHeroData } from "./about.service";

const About = () => {
  const intialState = {
    loading: true,
    payload: [],
    error: false,
  };
  const [ state, dispatch] = useReducer(fetchReducer, intialState);
  const [ Colorstate, dispatchColor] = useReducer(fetchReducer, intialState);

  const getData = async () => {
    try {
      dispatch({ type: fetchReducerTypes.FECTCH_START });
      const response = await getSuperHeroData();
      dispatch({ type: fetchReducerTypes.FETCH_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: fetchReducerTypes.FECTCH_ERROR });
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const getColors = async() =>{
    try {
      dispatchColor({ type: fetchReducerTypes.FECTCH_START });
      const response = await getColorsData();
      dispatchColor({ type: fetchReducerTypes.FETCH_SUCCESS, payload: response });
    } catch (error) {
      dispatchColor({ type: fetchReducerTypes.FECTCH_ERROR });
    }
  };
  return (
    <div>
      {state.loading ? (
        "Loading..."
      ) : (
        <>
        <button onClick={()=>getColors()} >Get Colors</button>
          {state.payload.data &&
            state.payload.data.map((ele: {name:string, id:number, alterEgo:string}) => {
              return (
                  <ul key={ele.id}>
                  <li>{ele.id} - {ele.name}</li>
                  </ul>
              );
            })}
            <br/>
            {Colorstate.payload.data &&
            Colorstate.payload.data.map((ele: { id:number, color:string}) => {
              return (
                  <ul key={ele.id}>
                  <li>{ele.id} - {ele.color}</li>
                  </ul>
              );
            })}
        </>
      )}
    </div>
  );
};

export default About;
