import { useState, useEffect } from "react";
import {
  // TextField,
  // ReferenceField,
  // Datagrid,
  // FunctionField,
  useDelete,
  Filter,
  useNotify,
  SearchInput,
} from "react-admin";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "@/stores";
import { open, clear } from "@/stores/slices/sliceConfirm";
import ListComponent from "@/components/list-component/ListComponent";
import ActionsComponent from "@/components/actions-component/ActionsComponent";
import DialogComponent from "@/components/dialog-component/DialogComponent";
import UtilFormCreate from "./UtilFormCreate";
import UtilFormEdit from "./UtilFormEdit";

import DataStatus from "../datas/DataStatus";
import DataComments from "../datas/DataComments";

const ProductFilter = (props: any) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn placeholder="Tìm kiếm bài viết" />
  </Filter>
);

const UtilList = (props: any) => {
  const confirm: any = useSelector<RootState>((state) => state.confirm);
  const dispath = useDispatch<RootDispatch>();
  const notify = useNotify();

  const [selectedIds, setSelectedIds] = useState<number>(-1);
  const [deleteOne, { isLoading }] = useDelete();

  const [dialogCreate, setDialogCreate] = useState(false);
  const [dialogEdit, setDialogEdit] = useState(false);

  const openDialogCreate = () => {
    setDialogCreate(true);
  };

  const closeDialogCreate = () => {
    setDialogCreate(false);
  };

  const openDialogEdit = () => {
    if (selectedIds < 0) {
      dispath(open({ title: "Edit", message: "Please select a status.", isSave: false }));
      return;
    }
    setDialogEdit(true);
  };

  const closeDialogEdit = () => {
    setDialogEdit(false);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedIds(id);
  };

  const handleDelete = () => {
    if (selectedIds < 0) {
      dispath(open({ title: "Delete", message: "Please select a status.", isSave: false }));
      return;
    }
    dispath(
      open({ title: "delete", message: "Are you sure you want to delete?", isSave: true }),
    );
  };

  useEffect(() => {
    console.log(confirm.value);
    if (confirm.value && selectedIds >= 0) {
      deleteOne(
        props.model,
        { id: selectedIds },
        {
          onSuccess: () => {
            dispath(clear());
            notify("Delete success!", { type: "success" });
            setSelectedIds(-1);
          },
          onError: (error) => {
            notify("Delete unsuccess!", { type: "error" });
          },
        },
      );
    }
  }, [confirm.value]);

  useEffect(() => {
    dispath(clear());
  }, [props.model])

  return (
    <>
      
        <ListComponent
          resource={props.model}
          isActions={true}
          filters={<ProductFilter />}
          actions={
            <ActionsComponent
              types={props.model}
              onOpenCreate={openDialogCreate}
              onOpenEdit={openDialogEdit}
              onDelete={handleDelete}
            />
          }
        >
          {props.model === "status" && (
            <DataStatus
              selectedIds={selectedIds}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}

          {props.model === "comments" && (
            <DataComments
              selectedIds={selectedIds}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
        </ListComponent>

      <DialogComponent open={dialogCreate} onClose={closeDialogCreate}>
        <UtilFormCreate model={props.model} closeDialog={closeDialogCreate} />
      </DialogComponent>

      {selectedIds >= 0 && (
        <DialogComponent open={dialogEdit} onClose={closeDialogEdit}>
          <UtilFormEdit
            model={props.model}
            id={selectedIds}
            closeDialog={closeDialogEdit}
          />
        </DialogComponent>
      )}
    </>
  );
};

export default UtilList;
