import {
  TextField,
  Datagrid,
  FunctionField,
  useTranslate
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";

interface DataCommentsProps {
  selectedIds: number;
  handleCheckboxChange: (id: number) => any;
}

const DataComments = (props: DataCommentsProps) => {
  const translate = useTranslate();

  return (
    <Datagrid
      bulkActionButtons={false}
      rowClick={(id, basePath, record) => {
        return false;
      }}
    >
      <FunctionField
        label="NO"
        render={(record: any) => (
          <Checkbox
            checked={props.selectedIds === record?.id}
            onChange={() => props.handleCheckboxChange(record.id)}
          />
        )}
      />

      <TextField
        source="title"
        label={translate("commons.list.field.value")}
      />
      <TextField
        source="display"
        label={translate("commons.list.field.display")}
      />
      <TextField
        source="display"
        label={translate("commons.list.field.description")}
      />
      <TextField
        source="display"
        label={translate("commons.list.field.foreground")}
      />
      <TextField
        source="display"
        label={translate("commons.list.field.background")}
      />
    </Datagrid>
  );
};

export default DataComments;