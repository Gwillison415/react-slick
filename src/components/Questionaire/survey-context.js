import React from "react";
export const responses = {};
export const SurveyContext = React.createContext({
  responses: {},
  setResponse: () => {},
});
