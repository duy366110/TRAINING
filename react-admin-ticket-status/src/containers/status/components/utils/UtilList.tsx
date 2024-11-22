import { useState, useEffect } from "react";
import {
  useDelete,
  Filter,
  useNotify,
  SearchInput,
  useTranslate
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
import DataDefault from "../datas/DataDefault";

const ProductFilter = (props: any) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn placeholder={translate("commons.filter.search")} />
    </Filter>
  );
}

const UtilList = (props: any) => {
  const confirm: any = useSelector<RootState>((state) => state.confirm);
  const translate = useTranslate();
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
      dispath(open({
        title: translate("commons.button.edit"),
        message: translate("commons.confirm.message"),
        isSave: false
      }));
      return;
    }
    setDialogEdit(true);
  };

  const closeDialogEdit = () => {
    setDialogEdit(false);
  };

  const handleCheckboxChange = (id: number) => {
    if(id === selectedIds) {
      setSelectedIds(-1);
      return;
    }
    setSelectedIds(id);
  };

  const handleDelete = () => {
    if (selectedIds < 0) {
      dispath(open({
        title: translate("commons.button.delete"),
        message: translate("commons.confirm.message"),
        isSave: false
      }));
      return;
    }
    dispath(
      open({
        title: translate("commons.button.delete"),
        message: translate("commons.confirm.message"),
        isSave: true
      }),
    );
  };

  useEffect(() => {
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
          {props.model === "priorities" && (
            <DataStatus
              selectedIds={selectedIds}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}

          {props.model === "defaults" && (
            <DataDefault
              selectedIds={selectedIds}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
        </ListComponent>

      <DialogComponent
        titleType={props.model === "defaults"? "resources.default.name" : "resources.priority.name"}
        titleContent="commons.dialog.create"
        subTitle="commons.dialog.subTitleCreate"
        open={dialogCreate}
        onClose={closeDialogCreate}
      >
        <UtilFormCreate model={props.model} closeDialog={closeDialogCreate} />
      </DialogComponent>

      {selectedIds >= 0 && (
        <DialogComponent
          titleType={props.model === "defaults"? "resources.default.name" : "resources.priority.name"}
          titleContent="commons.dialog.edit"
          subTitle="commons.dialog.subTitleEdit"
          open={dialogEdit}
          onClose={closeDialogEdit}
        >
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
