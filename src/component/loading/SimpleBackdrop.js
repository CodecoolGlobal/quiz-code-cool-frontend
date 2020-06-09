import React, {useContext} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AuthContext } from "context/AuthContext";

export default function SimpleBackdrop() {
  const { backdropState } = useContext(AuthContext);
  const [isBackdropActive] = backdropState;

  return (
      <Backdrop open={isBackdropActive}>
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}