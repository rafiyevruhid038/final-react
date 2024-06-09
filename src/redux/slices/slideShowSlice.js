
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  images: [],
  page: 1,
  status: 'idle',
  error: null,
};

export const fetchSlideShowImages = createAsyncThunk(
  'slideShow/fetchSlideShowImages',
  async (page) => {
    const url = `https://api.rawg.io/api/games?key=0c19f259a8b84747bac453b4bd1bca6b&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
);

const slideShowSlice = createSlice({
  name: 'slideShow',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlideShowImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSlideShowImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchSlideShowImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage } = slideShowSlice.actions;

export default slideShowSlice.reducer;
