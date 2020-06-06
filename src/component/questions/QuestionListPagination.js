import React, {useContext} from "react";
import { QuestionFilterContext } from 'context/QuestionFilterContext';
import Pagination from "@material-ui/lab/Pagination";
import { applicationTheme } from "style/js/CommonStyles";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiPaginationItem: {
      // Name of the rule
      root: {
        // Some CSS
        color: applicationTheme.color1,
      },
    },
    MuiPagination: {
      ul: {
        margin: "10px",
        justifyContent: "center"
      }
    }
  },
});

export default function QuestionListPagination() {
  const { pageState, getPageNumber} = useContext(QuestionFilterContext);
  const [page, setPage] = pageState;

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Pagination shape='rounded' size='small' count={getPageNumber()} page={page} onChange={handleChange} />
   </ThemeProvider>
  );
}
