// redux/features/imageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        addImage: (state, action) => {
            const newImages = action.payload.map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
                lastModified: file.lastModified,
                previewUrl: URL.createObjectURL(file),
            }));
            return [...state, ...newImages];
        },
    },
});

export const { addImage } = imageSlice.actions;
export default imageSlice.reducer;
