import React, {useContext} from "react";
import { QuestionFilterContext } from 'context/QuestionFilterContext';
import Pagination from "@material-ui/lab/Pagination";

export default function QuestionListPagination() {
  const { pageState, getPageNumber} = useContext(QuestionFilterContext);
  const [page, setPage] = pageState;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
      <Pagination shape='rounded' size='small' count={getPageNumber()} page={page} onChange={handleChange} />
  );
}
