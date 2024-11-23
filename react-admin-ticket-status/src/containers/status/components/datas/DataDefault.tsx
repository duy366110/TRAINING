import { useEffect, useState } from "react";
import {
  TextField,
  Datagrid,
  FunctionField,
  useTranslate,
  useListContext,
  SortPayload,
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FieldFunctionComponent from "@/components/fields-component/field-function-component/FieldFunctionComponent";

interface DataDefaultProps {
  selectedIds: number;
  handleCheckboxChange: (id: number) => any;
}

const DataDefault = (props: DataDefaultProps) => {
  const translate = useTranslate();
  const { data, filterValues }: any = useListContext();
  const [localData, setLocalData] = useState<Array<any>>([]);
  const [sort, setSort] = useState<SortPayload>({
    field: "value",
    order: "ASC",
  });
  const [isSort, setIsSort] = useState<boolean>(false);

  const renderCustomField = (record: any, filed: string) => {
    return (
      <Typography
        className={`
        flex items-center
        capitalize text-[15px] font-semibold
      `}
      >
        {record[`${filed}-color`] && (
          <FiberManualRecordIcon
            className={`text-[${record[`${filed}-color`]}] !w-[12px] mr-1`}
          />
        )}
        {record[filed]}
      </Typography>
    );
  };

  const handleSortChange = (sort: SortPayload) => {
    setIsSort(true);
    setSort(sort);
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      setLocalData([...data]);
    }
  }, []);

  useEffect(() => {
    if (isSort) {
      const sortedData = [...data].sort((a, b) => {
        const field = sort.field;
        const order = sort.order === "ASC" ? 1 : -1;

        if (a[field] < b[field]) return -1 * order;
        if (a[field] > b[field]) return 1 * order;
        return 0;
      });

      setIsSort(false);
      setLocalData(sortedData);
    }
  }, [isSort]);

  useEffect(() => {
    if (Array.isArray(localData)) {
      const filterData = localData.filter((item: any) => {
        return item.value
          .toLowerCase()
          .includes(filterValues?.value?.toLowerCase() || "");
      });
      setLocalData(filterData.length ? filterData : data);
    }
  }, [filterValues]);

  return (
    <Datagrid
      bulkActionButtons={false}
      rowClick={(id, basePath, record) => {
        return false;
      }}
      data={localData}
      setSort={handleSortChange}
      sort={sort}
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
        field="value"
        source="value"
        render={renderCustomField}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.display")}
        field="display"
        source="display"
        render={renderCustomField}
      />

      <TextField
        className="capitalize"
        source="description"
        label={translate("commons.list.field.description")}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.foreground")}
        field="foreground"
        source="foreground"
        render={renderCustomField}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.foreground")}
        field="background"
        source="background"
        render={renderCustomField}
      />
    </Datagrid>
  );
};

export default DataDefault;
