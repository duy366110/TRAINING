import { TextInput, required } from "react-admin";
import ColorInputComponent from "../color-input-component/ColorInputComponent";

interface FieldColorComponent {
    source:string;
    color: string;
    label?: string;
    labelColor?: string;
}

const FieldColorComponent = (props: FieldColorComponent) => {

    return (
        <div>
            <div className="grid grid-cols-12 gap-2 items-center">
              <TextInput
                className="col-span-10"
                label={props.label}
                source={props.source}
                validate={required()}
            />
              <ColorInputComponent
                className="col-span-2 mb-[25px]"
                label={props.labelColor}
                isCustom={true}
                source={props.color} />
            </div>
        </div>
    )
}

export default FieldColorComponent;