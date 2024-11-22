import { TextField, Datagrid, FunctionField, useTranslate } from "react-admin";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import FieldFunctionComponent from "@/components/fields-component/field-function-component/FieldFunctionComponent";

interface DataDefaultProps {
  selectedIds: number;
  handleCheckboxChange: (id: number) => any;
}

const DataDefault = (props: DataDefaultProps) => {
  const translate = useTranslate();

  const renderCustomField = (record: any, filed: string) => {
    if (["Lowest", "Red"].includes(record[filed])) {
      return <Typography color={"red"}>{record?.value}</Typography>;
    }
    if (["Hightset", "Green"].includes(record[filed])) {
      return <Typography color={"green"}>{record.value}</Typography>;
    }
    return null;
  };

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

      <FieldFunctionComponent
        label={translate("commons.list.field.value")}
        filed="value"
        render={renderCustomField}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.display")}
        filed="display"
        render={renderCustomField}
      />

      <TextField
        source="description"
        label={translate("commons.list.field.description")}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.foreground")}
        filed="foreground"
        render={renderCustomField}
      />

      <TextField
        source="background"
        label={translate("commons.list.field.background")}
      />
    </Datagrid>
  );
};

export default DataDefault;
