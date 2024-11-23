import { FunctionField } from "react-admin";

interface FieldFunctionComponentProps {
    label?: string;
    field: string;
    source: string;
    render?: (record?: any, field?: any) => any;
}

const FieldFunctionComponent = (props: FieldFunctionComponentProps | any) => {

    return (
        <FunctionField
            label={props.label}
            render={(record: any) => props.render(record, props.field)}
        />
    )
}

export default FieldFunctionComponent;