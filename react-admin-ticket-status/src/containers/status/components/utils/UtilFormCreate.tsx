import {
  useCreate,
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import ColorComponent from "@/components/color-component/ColorComponent";
import ActionsFormComponent from "@/components/actions-form-component/ActionsFormComponent";

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
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<ActionsFormComponent onCancel={props.closeDialog} actionsType="created" />}
          >
            <TextInput
              label="Value"
              source="value"
              validate={required()}
            />

            <TextInput
              label="Display"
              source="display"
              validate={required()}
            />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            
            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Create>
      )}

      {props.model === "defaults" && (
        <Create>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<ActionsFormComponent onCancel={props.closeDialog} actionsType="created" />}
          >
            <TextInput
              label="Value"
              source="value"
              validate={required()}
            />

            <TextInput
              label="Display"
              source="display"
              validate={required()}
            />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            
            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Create>
      )}

      {props.model === "status" && (
        <Create>
          <SimpleForm
            onSubmit={handleSubmit}
            toolbar={<ActionsFormComponent onCancel={props.closeDialog} actionsType="created" />}
          >
            <TextInput
              label="Value"
              source="value"
              validate={required()}
            />

            <TextInput
              label="Display"
              source="display"
              validate={required()}
            />

            <TextInput
              label="Description"
              source="description"
              validate={required()}
            />
            
            <div className="flex gap-10">
              <ColorComponent
                label="Foreground"
                source="foreground"
                colorDemo="#ffffff"
              />
              <ColorComponent
                label="Background"
                source="background"
                colorDemo="#000000"
              />
            </div>
          </SimpleForm>
        </Create>
      )}
    </>
  );
};

export default UtilFormCreate;
