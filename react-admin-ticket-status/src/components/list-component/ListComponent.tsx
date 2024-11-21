import { ReactNode } from "react";
import {
    List,
  } from "react-admin";

interface ListComponent {
    children?: ReactNode,
    resource?: string,
    isActions?: boolean
    filters?: any,
    actions?: any
}

const ListComponent = (props: ListComponent) => {
  return (
    <List
      resource={props.resource}
      perPage={10}
      filters={props.filters}
      actions={props.isActions? props.actions : <div></div>}
    >
        {props.children}
    </List>
  );
};

export default ListComponent;
