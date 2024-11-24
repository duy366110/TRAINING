import * as React from "react";
import { NavLink } from "react-router-dom";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
}

interface BreadcrumbsComponent {
  list: Array<any>;
}

const BreadcrumbsComponent = (props: BreadcrumbsComponent) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {props.list.length > 0 &&
          props.list.map((breadcrumb: any) => {
            if (breadcrumb?.last) {
              return (
                <StyledBreadcrumb component="p" label={breadcrumb.label} />
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
                <NavLink className="bg-[#e5e7ebf5] rounded-full px-2 py-[3.5px] text-[15px]" to={breadcrumb.link}>{breadcrumb.label}</NavLink>
            )
          })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;
