import * as React from "react";
import { useState } from "react";
import {
  List,
  DatagridConfigurable,
  TextField,
  ReferenceField,
  useCreate,
  Create, SimpleForm, TextInput, required
} from "react-admin";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField as MuiTextField,
} from "@mui/material";
import ListComponent from "@/components/list-component/ListComponent";
import TabComponent from "@/components/tab-component/TabComponent";
import ActionsComponent from "@/components/actions-component/ActionsComponent";
import UtilFormCreate from "./utils/UtilFormCreate";

const StatusList = (props: any) => {
  const [value, setValue] = useState(0);
  const [create] = useCreate("status");
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [openDialog, setOpenDialog] = useState(false);

  // Function to open the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handle save action
//   const handleSave = async () => {
//     console.log(formData);

//     try {
//       await create(
//         "status",
//         { data: formData }, // Send form data as the resource data
//         {
//           onSuccess: () => {
//             handleCloseDialog(); // Close dialog on success
//           },
//           onFailure: (error: any) => {
//             console.log(error.message); // Set error message on failure
//           },
//         },
//       );
//     } catch (e) {
//       console.log("Error while saving data.");
//     }
//   };

  return (
    <TabComponent value={value} change={handleChangeTab}>
      <>
        {value === 0 && (
          <div>
            <ListComponent
              resource="status"
              isActions={true}
              actions={
                <ActionsComponent
                  types="status"
                  onOpenCreate={handleOpenDialog}
                />
              }
            >
              <DatagridConfigurable>
                <TextField source="id" label="ID" />
                <TextField source="title" label="Tiêu đề" />
                <TextField source="body" label="Nội dung" />
                <ReferenceField
                  source="userId"
                  reference="users"
                  label="Tác giả"
                >
                  <TextField source="name" />
                </ReferenceField>
              </DatagridConfigurable>
            </ListComponent>

            {/* Dialog for Create New Comment */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Add New Comment</DialogTitle>
              <DialogContent>
                {/* Form for adding new comment */}
                <DialogContentText>
                  Please fill in the information below to add a new comment.
                </DialogContentText>
                <UtilFormCreate closeDialog={handleCloseDialog} />

                {/* <Create>
                  <SimpleForm
                    onSubmit={handleSave} // Submit form data when user clicks save
                  >
                    <TextInput
                      label="Title"
                      source="title"
                      value={formData.title} // Binding value to state
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      validate={required()}
                    />
                    <TextInput
                      label="Body"
                      source="body"
                      value={formData.body} // Binding value to state
                      onChange={(e) =>
                        setFormData({ ...formData, body: e.target.value })
                      }
                      validate={required()}
                    />
                  </SimpleForm>
                </Create> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="secondary">
                  Cancel
                </Button>
                {/* <Button onClick={handleSave} color="primary">
                  Save
                </Button> */}
              </DialogActions>
            </Dialog>
          </div>
        )}
        {value === 1 && (
          <div>
            <List resource="comments" perPage={10}>
              <DatagridConfigurable>
                <TextField source="id" label="ID" />
                <TextField source="content" label="Người bình luận" />
              </DatagridConfigurable>
            </List>
          </div>
        )}
      </>
    </TabComponent>
  );
};

export default StatusList;
