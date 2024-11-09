const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };

      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };

      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };

      case "GET_SORT_VALUE":
        return {
          ...state,
          sorting_value: action.payload,
        };

      case "SORTING_PRODUCTS":
        let { sorting_value, filter_products } = state;
        let B = [...filter_products];

        let comp = (a, b) => {
          if (sorting_value === "lowest") {
            return a.price - b.price;
          }

          if (sorting_value === "highest") {
            return b.price - a.price;
          }

          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }

          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };

        let A = B.sort(comp);

        return {
          ...state,
          filter_products: A,
        };

      case "getSearchValue":
        const { name, value } = action.payload;
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };

      case "UpdateSearchValue":
        let { all_products } = state;
        let search_value = [...all_products];
        const { text, category, company, color } = state.filters;

        if (text) {
          search_value = search_value.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }

        if (company !== "All") {
          search_value = search_value.filter((curElem) => {
            return curElem.company === company;
          });
        }

        if (category !== "All") {
          search_value = search_value.filter((curElem) => {
            return curElem.category === category;
          });
        }

        if (color !== "All") {
          search_value = search_value.filter((curElem) => {
            return curElem.colors.includes(color);
          });
        }

        return {
          ...state,
          filter_products: search_value,
        };

        case "CLEAR_FILTERS":
          return {
            ...state,
            filters: {
              text: "",
              category: "All",
              company: "All",
              color: "All",
            },
          };

      default:
        return state;
    }
  };
  
  export default filterReducer;