import { ReactNode } from "react";
import { useTranslate } from "react-admin";
import { Card, CardContent, Tab, Tabs } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";

interface TabComponentProps {
  children?: ReactNode;
  type: string;
  value: number;
  change?: (event?: React.SyntheticEvent, newValue?: number) => void;
}

const TabComponent = (props: TabComponentProps) => {
  const translate = useTranslate();
  const tab: any = useSelector<RootState>((state) => state.tab);

  return (
    <Card className="mt-[25px]">
      {props.type === "status" && (
        <CardContent>
          <Tabs value={props.value} onChange={props.change}>
            {tab.status && tab.status.priority.show && (
              <Tab label={translate("commons.tabs.priority")} />
            )}

            {tab.status && tab.status.default.show && (
              <Tab label={translate("commons.tabs.default")} />
            )}

            {tab.status && tab.status.status.show && (
              <Tab label={translate("resources.status.name")} />
            )}
          </Tabs>
          {props.children}
        </CardContent>
      )}
    </Card>
  );
};

export default TabComponent;
