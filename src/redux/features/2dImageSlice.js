// redux/features/imageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const twodImageSlice = createSlice({
    name: '2dimages',
    initialState: [],
    reducers: {
        add2dImage: (state, action) => {
            const new2dImages = action.payload.map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
                lastModified: file.lastModified,
                previewUrl: URL.createObjectURL(file),
            }));
            return [...state, ...new2dImages];
        },
    },
});

export const { add2dImage } = twodImageSlice.actions;
export default twodImageSlice.reducer;
