import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
        repositories: null,
        status: "loading",
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
        repositories,
        status: "success",
    }),
    fetchRepositoriesError: () => ({
        repositories: null,
        status: "error",
    }),
    },
});

export const { 
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
 } = personalHomePageSlice.actions;

 const selectPersonalHomepageState = state => state.personalHomepage;

 export const selectRepositories = state => 
    selectPersonalHomepageState(state).repositories;

export const selectRepositoriesStatus = state =>
    selectPersonalHomepageState(state).status;

export default personalHomePageSlice.reducer;