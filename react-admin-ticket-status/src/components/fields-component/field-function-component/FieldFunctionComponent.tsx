import { FunctionField } from "react-admin";

const FieldFunctionComponent = (props: any) => {

    return (
        <FunctionField
            label={props.label}
            render={(record: any) => props.render(record, props.filed)}
        />
    )
}

export default FieldFunctionComponent;