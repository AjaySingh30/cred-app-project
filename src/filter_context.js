import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ContextAPI";
import reducer from './reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view:true,
  sorting_value:"lowest",
  filters:{ text: "",
  category: "all",
  company: "all",
  color:'all'
},
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

const [state, dispatch] = useReducer(reducer, initialState);

 const sorting=(e)=>{
  let userName=e.target.value;
  return dispatch({type:"GET_SORT_VALUE",payload:userName})}

 const updateFilterValue=(e)=>{
  let name=e.target.name;
  let value=e.target.value;

  return dispatch({type:"getSearchValue",payload:{name,value}})
 }

  // to clear the filter
  const clearFilters = () => {
    return dispatch({ type: "CLEAR_FILTERS" });
  };


 useEffect(()=>{
  dispatch({type:"SORTING_PRODUCTS"});
  dispatch({type:"UpdateSearchValue"})
 },[state.sorting_value,state.filters]);


  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  const setGridView=()=>{
    return dispatch({type:"SET_GRID_VIEW"})
  }

  const setListView=()=>{
    return dispatch({type:"SET_LIST_VIEW"})
  }

  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters,}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};