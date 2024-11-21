import { ReactNode } from "react";
import { Card, CardContent } from '@mui/material';
import { Tab, Tabs } from '@mui/material';

interface TabComponentProps {
  children?: ReactNode;
  value?: number,
  change?: (event?: React.SyntheticEvent, newValue?: number) => void
}

const TabComponent = (props: TabComponentProps) => {
  return (
    <Card>
      <CardContent>
        <Tabs value={props.value} onChange={props.change}>
          <Tab label={"Priority"} />
          <Tab label={"Default"} />
        </Tabs>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default TabComponent;
