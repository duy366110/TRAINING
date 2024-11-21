import { useState } from "react";
import {
  useCreate,
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const UtilFormCreate = (props: any) => {
    const [create] = useCreate("status");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleSave = async () => {
    console.log(formData);

    try {
      await create(
        "status",
        { data: formData }, // Send form data as the resource data
        {
          onSuccess: () => {
            props.closeDialog(); // Close dialog on success
          },
          onFailure: (error: any) => {
            console.log(error.message); // Set error message on failure
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  return (
    <Create>
      <SimpleForm
        onSubmit={handleSave} // Submit form data when user clicks save
      >
        <TextInput
          label="Title"
          source="title"
          value={formData.title} // Binding value to state
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          validate={required()}
        />
        <TextInput
          label="Body"
          source="body"
          value={formData.body} // Binding value to state
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          validate={required()}
        />
      </SimpleForm>
    </Create>
  );
};

export default UtilFormCreate;
