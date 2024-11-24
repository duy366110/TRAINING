import React, { useMemo } from "react";
import { useTranslate } from "react-admin";
import { Card, CardContent } from "@mui/material";
import UtilList from "./utils/UtilList";
import CustomizedBreadcrumbs from "@/components/breadcrumbs-component/BreadcrumbsComponent";

const PageDefault = (props: any) => {
  const translate = useTranslate();
  const breadcrumbs = useMemo(() => {
    return [
      {
        icon: "",
        label: translate("pos.home"),
        link: "/",
        first: true,
      },
      {
        icon: "",
        label: translate("resources.status.name"),
        link: "/status",
      },
      {
        icon: "",
        label: translate("resources.default.name"),
        link: "",
        last: true,
      },
    ];
  }, []);

  return (
    <Card className="mt-[25px]">
      <CardContent>
        <div>
          <CustomizedBreadcrumbs list={breadcrumbs} />
        </div>
        <UtilList model="defaults" showActions={false} />
      </CardContent>
    </Card>
  );
};

export default React.memo(PageDefault);
