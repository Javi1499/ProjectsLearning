import { SHOW_ALERT, HIDE_ALERT } from "types";

export function showAlert(alert) {
  return (dispatch) => {
    dispatch(CreateAlert(alert));
  };
}

const CreateAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert,
});

export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert());
  };
}
const hideAlert = () => ({
  type: HIDE_ALERT,
});
