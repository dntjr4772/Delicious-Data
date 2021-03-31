export const TOGGLE_POPUP_BOX = "TOGGLE_POPUP_BOX";

export const togglePopupBox = (isPop, dataIndex) => {
  return { type: TOGGLE_POPUP_BOX, isPop, dataIndex };
};
