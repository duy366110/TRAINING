import { useState } from 'react';
import { useInput, useRecordContext } from 'react-admin';
import { TwitterPicker } from 'react-color';

interface ColorComponentProps {
    colorDemo?: string;
    label?: string;
    source: string
}

const ColorComponent = (props: ColorComponentProps) => {
    const {
        field,
    } = useInput({...props, defaultValue: props.colorDemo});
    
    const record = useRecordContext();
    const [displayPicker, setDisplayPicker] = useState(false);
    const [colorDemo, setColorDemo] = useState<string>(props.colorDemo || "#000000");
    const color = field.value || record?.[props.source] || '#000000';

    const handleColorChange = (color: any) => {
        field.onChange(color.hex);
        setColorDemo(color.hex);
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setDisplayPicker(false);
        }
    };

    return (
        <div>
            <label>{props.label}</label>
            <div
                className="relative w-fit"
                onBlur={handleBlur}
                tabIndex={-1}
            >
                <div
                    className={`absolute border border-slate-200 rounded w-[25px] h-[25px] bg-[${colorDemo}] top-[50%] translate-y-[-50%] left-[5px]`}
                ></div>
                <input
                    className='!pl-8 py-[9px] pr-5 w-[220px]'
                    type="text"
                    value={color}
                    onClick={() => setDisplayPicker(!displayPicker)}
                    readOnly
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                />
                {displayPicker && (
                    <div
                        className="absolute z-10"
                        tabIndex={-1}
                    >
                        <TwitterPicker
                            className='!w-[280px]'
                            color={color}
                            onChangeComplete={handleColorChange}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorComponent;

