import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { fetchReducer } from "../../../Utils/reducer/fetchReducer";
import { fetchReducerTypes } from "../../../Utils/reducer/fetchReducerTypes";
import Sidebar from "../Sidebar/Sidebar";
import { getCategoryData } from "./category.service";
import ModalWrapper from "../../../Utils/Modal/Modal";
import CategoryList from "./CategoryList";
import CategoryData from './data.json'
const AllCategory = () => {
  const modelRef: any = useRef(null);
  const intialState = {
    loading: true,
    payload: [],
    error: false,
  };
  const [state, dispatch] = useReducer(fetchReducer, intialState);
  const [selected, setSelected] = useState({
    products: [],
    selectedCategory: "",
    selectedSubCategoryName: "",
  });
  const getCategories = async () => {
    try {
      dispatch({ type: fetchReducerTypes.FECTCH_START });
      // const response = await getCategoryData();
      dispatch({ type: fetchReducerTypes.FETCH_SUCCESS, payload: CategoryData.category });
    } catch (error) {
      dispatch({ type: fetchReducerTypes.FECTCH_ERROR });
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const productModal = useMemo(() => {
    return (
      <ModalWrapper ref={modelRef} title={selected.selectedSubCategoryName}>
        {selected.products.map((product: any) => {
          return (
            <React.Fragment key={product.id}>
              <h3>{product.name}</h3>
            </React.Fragment>
          );
        })}
      </ModalWrapper>
    );
  }, [selected.products, selected.selectedSubCategoryName]);
  return (
    <div>
      {state.loading ? (
        "Loading...."
      ) : (
        <>
          {productModal}
          <Sidebar
            categoryData={state.payload}
            setSelected={setSelected}
            selected={selected}
          />
          <div style={{margin:'auto'}}>
            <CategoryList
              categoriesList={state.payload}
              modelRef={modelRef}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AllCategory;
