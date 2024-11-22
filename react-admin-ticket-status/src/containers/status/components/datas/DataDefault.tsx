import {
  TextField,
  Datagrid,
  FunctionField,
  useTranslate,
  useListContext,
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import FieldFunctionComponent from "@/components/fields-component/field-function-component/FieldFunctionComponent";

interface DataDefaultProps {
  selectedIds: number;
  handleCheckboxChange: (id: number) => any;
}

const DataDefault = (props: DataDefaultProps) => {
  const { data, filterValues }: any = useListContext();
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

  const filteredData: any = data?.filter((prorities: any) => {
    if (
      filterValues.value &&
      !prorities.value.toLowerCase().includes(filterValues.value.toLowerCase())
    ) {
      return false;
    }

    if (
      filterValues.display &&
      !prorities.display
        .toLowerCase()
        .includes(filterValues.display.toLowerCase())
    ) {
      return false;
    }

    if (
      filterValues.description &&
      !prorities.description
        .toLowerCase()
        .includes(filterValues.description.toLowerCase())
    ) {
      return false;
    }

    if (
      filterValues.foreground &&
      !prorities.foreground
        .toLowerCase()
        .includes(filterValues.foreground.toLowerCase())
    ) {
      return false;
    }

    if (
      filterValues.background &&
      !prorities.background
        .toLowerCase()
        .includes(filterValues.background.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <Datagrid
      bulkActionButtons={false}
      rowClick={(id, basePath, record) => {
        return false;
      }}
      data={filteredData}
    >
      <FunctionField
        label="NO"
        render={(record: any) => (
          <Checkbox
            checked={props.selectedIds === record?.id}
            onChange={() => {
              if (!record?.default) {
                props.handleCheckboxChange(record.id);
              }
            }}
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
