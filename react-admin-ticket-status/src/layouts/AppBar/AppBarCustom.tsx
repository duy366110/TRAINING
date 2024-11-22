import { TitlePortal } from 'react-admin';
import { useNavigate } from "react-router-dom";
import { AppBar as MuiAppBar } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AppBarCustom = (props: any) => {
    const navigate = useNavigate();

    const backHandler = (event: any) => {
        navigate(-1);
    }
  return (
    <MuiAppBar className="h-[45px] mt-0 justify-center px-4" position="fixed" sx={{ boxShadow: "none", background: "none", marginTop: '0px' }}>
        <h2 className="flex items-center cursor-pointer" onClick={backHandler}>
            <ArrowBackIosIcon className="text-[15px] text-[#808080]" />
            <TitlePortal className='!text-[#808080]'>Create</TitlePortal>
        </h2>
    </MuiAppBar>
  );
};

export default AppBarCustom;
