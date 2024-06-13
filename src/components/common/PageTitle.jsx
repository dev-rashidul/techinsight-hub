/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | TechInsight Hub</title>
    </Helmet>
  );
};

export default PageTitle;
