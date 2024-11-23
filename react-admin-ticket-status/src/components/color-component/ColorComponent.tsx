import React, { useState } from 'react';
import { useInput, useRecordContext } from 'react-admin';
import { TwitterPicker } from 'react-color';

const ColorComponent = ({ source }: { source: string }) => {
    const {
        field, // Final form field API (input)
    } = useInput({ source });

    const record = useRecordContext();
    const [displayPicker, setDisplayPicker] = useState(false);

    // Lấy giá trị ban đầu từ record hoặc giá trị của field
    const color = field.value || record?.[source] || '#000000';

    const handleColorChange = (color: any) => {
        field.onChange(color.hex); // Cập nhật giá trị form
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Input hiển thị giá trị màu */}
            <input
                type="text"
                value={color}
                onClick={() => setDisplayPicker(!displayPicker)}
                readOnly
                style={{
                    width: '100px',
                    padding: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }}
            />
            {displayPicker && (
                <div style={{ position: 'absolute', zIndex: 2 }}>
                    <TwitterPicker
                        color={color}
                        onChangeComplete={handleColorChange}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorComponent;

