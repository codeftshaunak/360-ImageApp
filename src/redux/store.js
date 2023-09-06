// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './features/imageSlice';
import twodImageReducer from './features/2dImageSlice';
const store = configureStore({
    reducer: {
        images: imagesReducer,
        twodImages: twodImageReducer,
    }
});

export default store;
