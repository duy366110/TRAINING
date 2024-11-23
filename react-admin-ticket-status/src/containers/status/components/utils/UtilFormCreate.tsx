import {
  useCreate,
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import FieldColorComponent from "@/components/fields-component/field-color-component/FieldColorComponent";
import ColorComponent from "@/components/color-component/ColorComponent";

interface UtilFormCreateProps {
  model: string;
  closeDialog: () => void;
}

const UtilFormCreate = (props: UtilFormCreateProps) => {
  const [create] = useCreate(props.model);

  const handleSubmit = async (data: any) => {
    try {
      await create(
        props.model,
        { data },
        {
          onSuccess: () => {
            props.closeDialog();
          },
          onFailure: (error: any) => {
            console.log(error.message);
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  return (
    <>
      {props.model === "priorities" && (
        <Create>
          <SimpleForm onSubmit={handleSubmit}>
            <FieldColorComponent
              label="Value"
              labelColor="Value color"
              source="value"
              color="value-color"
            />

            <FieldColorComponent
              label="Display"
              labelColor="Display color"
              source="display"
              color="display-color"
            />

            {/* <FieldColorComponent
              label="Foreground"
              labelColor="Foreground color"
              source="foreground"
              color="foreground-color"
            /> */}

            {/* <FieldColorComponent
              label="Background"
              labelColor="Background color"
              source="background"
              color="background-color"
            /> */}

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />

            <ColorComponent source="foreground" />
            <ColorComponent source="background" />
          </SimpleForm>
        </Create>
      )}

      {props.model === "defaults" && (
        <Create>
          <SimpleForm onSubmit={handleSubmit}>
          <FieldColorComponent
              label="Value"
              labelColor="Value color"
              source="value"
              color="value-color"
            />

            <FieldColorComponent
              label="Display"
              labelColor="Display color"
              source="display"
              color="display-color"
            />

            <FieldColorComponent
              label="Foreground"
              labelColor="Foreground color"
              source="foreground"
              color="foreground-color"
            />

            <FieldColorComponent
              label="Background"
              labelColor="Background color"
              source="background"
              color="background-color"
            />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
          </SimpleForm>
        </Create>
      )}

      {props.model === "status" && (
        <Create>
          <SimpleForm onSubmit={handleSubmit}>
          <FieldColorComponent
              label="Value"
              labelColor="Value color"
              source="value"
              color="value-color"
            />

            <FieldColorComponent
              label="Display"
              labelColor="Display color"
              source="display"
              color="display-color"
            />

            <FieldColorComponent
              label="Foreground"
              labelColor="Foreground color"
              source="foreground"
              color="foreground-color"
            />

            <FieldColorComponent
              label="Background"
              labelColor="Background color"
              source="background"
              color="background-color"
            />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
          </SimpleForm>
        </Create>
      )}
    </>
  );
};

export default UtilFormCreate;
