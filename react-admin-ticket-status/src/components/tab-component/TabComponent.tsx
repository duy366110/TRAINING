import { ReactNode } from "react";
import { useTranslate } from "react-admin";
import { Card, CardContent, Tab, Tabs } from '@mui/material';

interface TabComponentProps {
  children?: ReactNode;
  value?: number,
  change?: (event?: React.SyntheticEvent, newValue?: number) => void
}

const TabComponent = (props: TabComponentProps) => {

  const translate = useTranslate();

  return (
    <Card
      style={{marginTop: "25px"}}
    >
      <CardContent>
        <Tabs value={props.value} onChange={props.change}>
          <Tab label={translate("commons.tabs.priority")} />
          <Tab label={translate("commons.tabs.default")} />
          <Tab label={translate("resources.status.name")} />
        </Tabs>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default TabComponent;
