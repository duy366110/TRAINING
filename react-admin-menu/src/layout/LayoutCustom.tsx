import {
    Layout
} from "react-admin";
import MenuCustom from "./menu/MenuCustom";
import AppBarCustom from "./appBar/AppBarCustom";

const LayoutCustom = (props: any) => {


    return (
        <Layout {...props} menu={MenuCustom} appBar={AppBarCustom} />
    )
}

export default LayoutCustom;