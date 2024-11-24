import { FunctionField } from "react-admin";

interface FieldFunctionComponentProps {
    label?: string;
    field: string;
    source: string;
    width?: string
    render?: (record?: any, field?: any, width?: string) => any;
}

const FieldFunctionComponent = (props: FieldFunctionComponentProps | any) => {

    return (
        <FunctionField
            label={props.label}
            render={(record: any) => props.render(record, props.field, props.width)}
        />
    )
}

export default FieldFunctionComponent;