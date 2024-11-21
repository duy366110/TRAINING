import * as React from "react";
import { useState } from "react";
import {
  List,
  DatagridConfigurable,
  TextField,
  ReferenceField,
  Datagrid,
  FunctionField,
} from "react-admin";
import ListComponent from "@/components/list-component/ListComponent";
import TabComponent from "@/components/tab-component/TabComponent";
import ActionsComponent from "@/components/actions-component/ActionsComponent";
import DialogComponent from "@/components/dialog-component/DialogComponent";
import UtilFormCreate from "./utils/UtilFormCreate";
import UtilFormEdit from "./utils/UtilFormEdit";
import Checkbox from "@mui/material/Checkbox";

const StatusList = (props: any) => {
  const [value, setValue] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number>(-1);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [dialogCreate, setDialogCreate] = useState(false);
  const [dialogEdit, setDialogEdit] = useState(false);

  const openDialogCreate = () => {
    setDialogCreate(true);
  };

  const closeDialogCreate = () => {
    setDialogCreate(false);
  };

  const openDialogEdit = () => {
    if(selectedIds >= 0) {
      setDialogEdit(true);
    }
  };

  const closeDialogEdit = () => {
    setDialogEdit(false);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedIds(id);
  };

  return (
    <TabComponent value={value} change={handleChangeTab}>
      <>
        {value === 0 && (
          <div>
            <ListComponent
              resource="status"
              isActions={true}
              actions={
                <ActionsComponent
                  types="status"
                  onOpenCreate={openDialogCreate}
                  onOpenEdit={openDialogEdit}
                />
              }
            >
              <Datagrid
                bulkActionButtons={false}
                rowClick={(id, basePath, record) => {
                  return false; // Hoặc thực hiện logic tuỳ chỉnh
                }}
              >
                <FunctionField
                  label="Select"
                  render={(record: any) => (
                    <Checkbox
                      checked={selectedIds === record?.id}
                      onChange={() => handleCheckboxChange(record.id)}
                    />
                  )}
                />

                <TextField source="id" label="ID" />
                <TextField source="title" label="Tiêu đề" />
                <TextField source="body" label="Nội dung" />
                <ReferenceField
                  source="userId"
                  reference="users"
                  label="Tác giả"
                >
                  <TextField source="name" />
                </ReferenceField>
              </Datagrid>
            </ListComponent>

            <DialogComponent open={dialogCreate} onClose={closeDialogCreate}>
              <UtilFormCreate closeDialog={closeDialogCreate} />
            </DialogComponent>

            {selectedIds >= 0 && (
              <DialogComponent open={dialogEdit} onClose={closeDialogEdit}>
                <UtilFormEdit id={selectedIds} closeDialog={closeDialogEdit} />
              </DialogComponent>
            )}
          </div>
        )}
        {value === 1 && (
          <div>
            <List resource="comments" perPage={10}>
              <DatagridConfigurable>
                <TextField source="id" label="ID" />
                <TextField source="content" label="Người bình luận" />
              </DatagridConfigurable>
            </List>
          </div>
        )}
      </>
    </TabComponent>
  );
};

export default StatusList;
