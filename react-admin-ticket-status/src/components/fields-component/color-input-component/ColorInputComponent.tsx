import { ColorInput } from "react-admin-color-picker";

interface ColorInputComponent {
    className?: string;
    label?: string;
    isCustom?: boolean;
    source: string;
}

const ColorInputComponent = (props: any) => {
  return (
    <div className={`${props.isCustom ? props.className : "w-full"}`}>
      <ColorInput
        label={props.label}
        source={props.source}
        picker="Compact"
        />
    </div>
  );
};

export default ColorInputComponent;
