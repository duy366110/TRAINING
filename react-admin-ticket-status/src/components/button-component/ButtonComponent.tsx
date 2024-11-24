import { Button } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface ButtonComponent {
    label?:string;
    type: string;
    onBack?: () => void;
}

const ButtonComponent = (props: any) => {

    return (
        <>
            {props.type === "back" && (
                <Button
                    className="flex items-center gap-0 hover:!bg-transparent"
                    onClick={props.onBack}
                >
                    <ChevronLeftIcon />
                    <span>
                        {props.label}
                    </span>
                </Button>
            )}
        </>
    )
}

export default ButtonComponent;