import React, {useContext} from "react";
import { StatusContext } from "context/StatusContext";

import { Select, InputItem, InputLabel } from "style/MyStyle";

export default function StatusInput() {
    const setSelectedStatus = useContext(StatusContext)[1];

    const handleStatus = e => {
        setSelectedStatus(e.target.value);
      };
    
  return (
    <InputItem>
      <InputLabel htmlFor='status'>Status</InputLabel>
      <Select id='status' name='status' onChange={handleStatus}>
        <option value=''>Any Status</option>
        <option value='true'>Validated</option>
        <option value='false'>Not validated</option>
      </Select>
    </InputItem>
  );
}
