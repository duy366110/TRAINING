import {
  TextField,
  ReferenceField,
  Datagrid,
  FunctionField,
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";

interface DataStatusProps {
    selectedIds: number;
    handleCheckboxChange: (id: number) => any
}

const DataStatus = (props: DataStatusProps) => {
  return (
    <Datagrid
      bulkActionButtons={false}
      rowClick={(id, basePath, record) => {
        return false;
      }}
    >
      <FunctionField
        label="Select"
        render={(record: any) => (
          <Checkbox
            checked={props.selectedIds === record?.id}
            onChange={() => props.handleCheckboxChange(record.id)}
          />
        )}
      />

      <TextField source="id" label="ID" />
      <TextField source="title" label="Tiêu đề" />
      <TextField source="body" label="Nội dung" />
      <ReferenceField source="userId" reference="users" label="Tác giả">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  );
};

export default DataStatus;
