import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Sections from "./Sections";
import { SurveyContext, reponses } from "./survey-context";
import { surveyData } from "./data";
const Survey = ({ sections }) => {
  const [survey, setSurvey] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);

  const next = function () {
    // @todo Need to handle when inde is out of bound
    setIndex(index + 1);
  };

  useEffect(() => {
    setLoading(true);
    console.log("surveyData", surveyData);
    setSurvey(surveyData);
    setLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!survey) return <p>No survey available</p>;
  // if (!survey) return <p>No survey available</p>

  return (
    <>
      <h1 className={styles.title}>Survey Id {survey.id}</h1>
      {/* <SurveyContext.Provider value={surveyState}> */}

      <Sections section={survey.sections[index]} />
      {/* </SurveyContext.Provider> */}
      <button onClick={next}>Next</button>
    </>
  );
};

Survey.getTitle = () => "Survey";

export default Survey;
