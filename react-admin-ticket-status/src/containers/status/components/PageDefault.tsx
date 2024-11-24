import { Card, CardContent } from "@mui/material";
import UtilList from "./utils/UtilList";
import CustomizedBreadcrumbs from "@/components/breadcrumbs-component/BreadcrumbsComponent";

const breadcrumbs = [
    {
        icon: "",
        label: "home",
        link: "/",
        first: true,
    },
    {
        icon: "",
        label: "status",
        link: "/status"
    },
    {
        icon: "",
        label: "default",
        link: "",
        last: true
    }
]

const PageDefault = (props: any) => {
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

export default PageDefault;
