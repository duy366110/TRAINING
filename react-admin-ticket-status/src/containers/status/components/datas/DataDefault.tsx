import { useEffect, useState } from "react";
import {
  Datagrid,
  FunctionField,
  useTranslate,
  useListContext,
  SortPayload,
} from "react-admin";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
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

  const renderCustomField = (record: any, filed: string, width?: string) => {
    return (
      <Typography
        className={`
          Typography-cell flex items-center w-[${width}]
          capitalize !text-[0.85rem] font-semibold h-[45px] border border-transparent 
          ${filed === "display" ? `hover:border hover:border-[${record["background"]}] bg-[#e7edf933] pl-2 text-[${record["foreground"]}]` : ""}
        `}
      >
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
        width="140px"
        render={renderCustomField}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.display")}
        field="display"
        source="display"
        width="140px"
        render={renderCustomField}
      />

      <FieldFunctionComponent
        label={translate("commons.list.field.description")}
        field="description"
        source="description"
        width="auto"
        render={renderCustomField}
      />
    </Datagrid>
  );
};

export default DataDefault;
