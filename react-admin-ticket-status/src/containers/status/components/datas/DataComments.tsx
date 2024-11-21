import {
  TextField,
  Datagrid,
  FunctionField,
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";

interface DataCommentsProps {
  selectedIds: number;
  handleCheckboxChange: (id: number) => any;
}

const DataComments = (props: DataCommentsProps) => {
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
      <TextField source="content" label="Người bình luận" />
    </Datagrid>
  );
};

export default DataComments;
