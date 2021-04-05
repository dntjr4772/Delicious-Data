const initialState = {
  isPop: false,
  popIndex: -1,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_POPUP_BOX":
      return { isPop: !state.isPop, popIndex: action.dataIndex };
    default:
      return state;
  }
};

export default search;
