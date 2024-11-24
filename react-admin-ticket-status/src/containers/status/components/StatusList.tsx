import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import TabComponent from "@/components/tab-component/TabComponent";

import UtilList from "./utils/UtilList";

const StatusList = (props: any) => {
  const [value, setValue] = useState(0);
  const tab: any = useSelector<RootState>((state) => state.tab);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabComponent value={value} type="status" change={handleChangeTab}>
      <>
        {tab.status && tab.status.priority.show && value === tab.status.priority.index && (
          <UtilList model="priorities" showActions={true} />
        )}

        {tab.status && tab.status.default.show && value === tab.status.default.index && (
          <UtilList model="defaults" showActions={true} />
        )}

        {tab.status && tab.status.status.show && value === tab.status.status.index && (
          <UtilList model="status" showActions={true} />
        )}
      </>
    </TabComponent>
  );
};

export default StatusList;
