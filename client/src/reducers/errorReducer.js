import { GET_ERRORS } from "../actions/types";

const initialState = {
  // Initialize error keys
  registerErrors: {},
  loginErrors: {},
  // ... other error types
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
         // Update the relevant error key based on action type or payload
         registerErrors: action.payload.registerErrors || {},
         loginErrors: action.payload.loginErrors || {},
         // ... update other error types if needed
      };
    default:
      return state;
  }
}
