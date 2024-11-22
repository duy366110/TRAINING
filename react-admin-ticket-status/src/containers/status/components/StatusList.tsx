import * as React from "react";
import { useState } from "react";
import TabComponent from "@/components/tab-component/TabComponent";

import UtilList from "./utils/UtilList";

const StatusList = (props: any) => {
  const [value, setValue] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabComponent value={value} change={handleChangeTab}>
      <>
        {value === 0 && (<UtilList model="status" />)}
        {value === 1 && (<UtilList model="comments" />)}
      </>
    </TabComponent>
  );
};

export default StatusList;
