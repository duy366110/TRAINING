import { ReactNode } from "react";
import {
    List,
    DatagridConfigurable,
    // TextField,
    // ReferenceField,
    // useCreate
  } from "react-admin";

interface ListComponent {
    children?: ReactNode,
    resource?: string,
    isActions?: boolean
    actions?: any
}

const ListComponent = (props: ListComponent) => {
  return (
    <List
      resource={props.resource}
      perPage={10}
      actions={props.isActions? props.actions : <div></div>}
    >
        {props.children}
    </List>
  );
};

export default ListComponent;
