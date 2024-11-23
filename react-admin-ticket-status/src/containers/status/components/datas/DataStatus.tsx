import {
    TextField,
    Datagrid,
    FunctionField,
    useTranslate,
    useListContext,
    SortPayload,
  } from "react-admin";
  import { useState, useEffect } from "react";
  import FieldFunctionComponent from "@/components/fields-component/field-function-component/FieldFunctionComponent";
  import Checkbox from "@mui/material/Checkbox";
  import { Typography } from "@mui/material";
  
  interface DataPriorityProps {
    selectedIds: number;
    handleCheckboxChange: (id: number) => any;
  }
  
  const DataStatus = (props: DataPriorityProps) => {
    const translate = useTranslate();
    const { data, filterValues }: any = useListContext();
    const [localData, setLocalData] = useState<Array<any>>([]);
    const [sort, setSort] = useState<SortPayload>({
      field: "value",
      order: "ASC",
    });
    const [isSort, setIsSort] = useState<boolean>(false);
  
    const renderCustomField = (record: any, filed: string) => {
      if (["Lowest", "Red"].includes(record[filed])) {
        return <Typography color={"red"}>{record?.value}</Typography>;
      }
      if (["Hightset", "Green"].includes(record[filed])) {
        return <Typography color={"green"}>{record.value}</Typography>;
      }
      return null;
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
  
  export default DataStatus;
  