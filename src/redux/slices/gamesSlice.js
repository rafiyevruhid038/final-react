import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  gameData: [],
  gameName: '',
  page: 1,
  status: 'idle',
  error: null,
  selectedGame: null,
  screenshots: [], // screenshots state'i ekledim
  filters: [], 
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async ({ gameName, page, filters }) => {
    const filterQuery = filters.length ? `&genres=${filters.join(',')}` : '';
    const searchQuery = gameName ? `&search=${gameName}` : ''; 
    const url = `https://api.rawg.io/api/games?key=0c19f259a8b84747bac453b4bd1bca6b&page=${page}${filterQuery}${searchQuery}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    const data = await response.json();
    return data.results.sort((a, b) => b.rating - a.rating);
  }
);

export const fetchGameDetail = createAsyncThunk(
  'games/fetchGameDetail',
  async (id) => {
    const url = `https://api.rawg.io/api/games/${id}?key=0c19f259a8b84747bac453b4bd1bca6b`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch game details');
    }
    const data = await response.json();
    return data;
  }
);

export const fetchScreenshots = createAsyncThunk(
  'games/fetchScreenshots',
  async (id) => {
    const url = `https://api.rawg.io/api/games/${id}/screenshots?key=0c19f259a8b84747bac453b4bd1bca6b`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch screenshots');
    }
    const data = await response.json();
    return data.results;
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGameName(state, action) {
      state.gameName = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    nextPage(state) {
      state.page += 1;
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gameData = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchGameDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGameDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedGame = action.payload;
      })
      .addCase(fetchGameDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchScreenshots.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchScreenshots.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.screenshots = action.payload;
      })
      .addCase(fetchScreenshots.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setGameName, setFilters, nextPage, prevPage } = gamesSlice.actions;

export const fetchNextPage = () => async (dispatch, getState) => {
  const { games } = getState();
  if (games.gameData.length === 20) { // Burada 20, sayfa başına oyun sayısını ifade ediyor
    dispatch(nextPage());
    dispatch(fetchGames({ gameName: games.gameName, page: games.page, filters: games.filters }));
  }
};

export const fetchPrevPage = () => async (dispatch, getState) => {
  const { games } = getState();
  if (games.page > 1) {
    dispatch(prevPage());
    dispatch(fetchGames({ gameName: games.gameName, page: games.page, filters: games.filters }));
  }
};

export default gamesSlice.reducer;
