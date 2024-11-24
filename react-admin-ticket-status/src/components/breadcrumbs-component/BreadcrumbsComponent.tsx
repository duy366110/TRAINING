import { NavLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

interface BreadcrumbsComponent {
  list: Array<any>;
}

const BreadcrumbsComponent = (props: BreadcrumbsComponent) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {props.list.length > 0 &&
          props.list.map((breadcrumb: any) => {
            if (breadcrumb?.last) {
              return (
                <p className="bg-[#e5e7eb52] rounded-full px-2 text-[15px]">{breadcrumb.label}</p>
              );
            }

            if (breadcrumb?.first) {
              return (
                <NavLink
                    className="flex gap-1 items-center bg-[#e5e7ebf5] rounded-full px-2 text-[15px]"
                    to={breadcrumb.link}
                >
                    <HomeIcon fontSize="small" />
                    {breadcrumb.label}
                </NavLink>
              );
            }

            return (
                <NavLink className="bg-[#e5e7ebf5] rounded-full px-3 py-[2.5px] text-[15px]" to={breadcrumb.link}>{breadcrumb.label}</NavLink>
            )
          })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
