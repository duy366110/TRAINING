import * as React from "react";
import { useState, useEffect } from "react";
import {
  List,
  DatagridConfigurable,
  TextField,
  ReferenceField,
  Datagrid,
  FunctionField,
  useDelete,
  Filter,
  useNotify,
  SearchInput
} from "react-admin";
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
        {/* {value === 1 && (
          <div>
            <List resource="comments" perPage={10}>
              <DatagridConfigurable>
                <TextField source="id" label="ID" />
                <TextField source="content" label="Người bình luận" />
              </DatagridConfigurable>
            </List>
          </div>
        )} */}
      </>
    </TabComponent>
  );
};

export default StatusList;
