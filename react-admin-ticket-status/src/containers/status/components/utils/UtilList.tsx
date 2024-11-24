import { useState, useEffect } from "react";
import {
  useDelete,
  Filter,
  useNotify,
  SearchInput,
  useTranslate,
  useGetIdentity,
} from "react-admin";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "@/stores";
import { open, clear } from "@/stores/slices/sliceConfirm";
import ListComponent from "@/components/list-component/ListComponent";
import ActionsComponent from "@/components/actions-component/ActionsComponent";
import DialogComponent from "@/components/dialog-component/DialogComponent";
import UtilFormCreate from "./UtilFormCreate";
import UtilFormEdit from "./UtilFormEdit";

import DataPriority from "../datas/DataPrority";
import DataDefault from "../datas/DataDefault";
import DataStatus from "../datas/DataStatus";

const ProductFilter = (props: any) => {
  const translate = useTranslate();

  return (
    <Filter {...props}>
      <SearchInput
        source="value"
        alwaysOn
        placeholder={translate("commons.filter.search")}
      />
    </Filter>
  );
};

interface UtilListProps {
  showActions?: boolean;
  showToolbar?: boolean;
  model: string;
}

const UtilList = (props: UtilListProps) => {
  const { identity }: any = useGetIdentity();
  const translate = useTranslate();
  const [deleteOne] = useDelete();
  const notify = useNotify();

  const confirm: any = useSelector<RootState>((state) => state.confirm);
  const dispath = useDispatch<RootDispatch>();

  const [selectedIds, setSelectedIds] = useState<number>(-1);
  const [dialogCreate, setDialogCreate] = useState(false);
  const [dialogEdit, setDialogEdit] = useState(false);

  const openDialogEdit = () => {
    if (selectedIds < 0) {
      dispath(
        open({
          title: translate("commons.button.edit"),
          message: translate("commons.confirm.message"),
          isSave: false,
        }),
      );
      return;
    }
    setDialogEdit(true);
  };

  const closeDialogEdit = () => {
    setDialogEdit(false);
  };

  const handleCheckboxChange = (id: number) => {
    if (id === selectedIds) {
      setSelectedIds(-1);
      return;
    }
    setSelectedIds(id);
  };

  const handleDelete = () => {
    if (identity.role === "admin" && identity.permissions?.includes("delete")) {
      if (selectedIds < 0) {
        dispath(
          open({
            title: translate("commons.button.delete"),
            message: translate("commons.confirm.message"),
            isSave: false,
          }),
        );
        return;
      }
      dispath(
        open({
          title: translate("commons.button.delete"),
          message: translate("commons.confirm.message"),
          isSave: true,
        }),
      );
    } else {
      notify(translate("commons.notify.notPermission"), { type: "error" });
    }
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
  }, [props.model]);

  return (
    <>
      <ListComponent
        resource={props.model}
        isActions={true}
        filters={<ProductFilter props={props} />}
        actions={
          props.showActions?
          <ActionsComponent
            types={props.model}
            onOpenCreate={() => setDialogCreate(true)}
            onOpenEdit={openDialogEdit}
            onDelete={handleDelete}
          /> : <></>
        }
      >
        {props.model === "priorities" && (
          <DataPriority
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

        {props.model === "status" && (
          <DataStatus
            selectedIds={selectedIds}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
      </ListComponent>

      <DialogComponent
        titleType={
          props.model === "defaults"
            ? "resources.default.name"
            : "resources.priority.name"
        }
        titleContent="commons.dialog.create"
        subTitle="commons.dialog.subTitleCreate"
        open={dialogCreate}
        onClose={() => setDialogCreate(false)}
      >
        <UtilFormCreate
          model={props.model}
          closeDialog={() => setDialogCreate(false)}
        />
      </DialogComponent>

      {selectedIds >= 0 && (
        <DialogComponent
          titleType={
            props.model === "defaults"
              ? "resources.default.name"
              : "resources.priority.name"
          }
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
