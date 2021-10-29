import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const dataAdapter = createEntityAdapter({
  selectId: (data) => data.id,
});

const initialState = dataAdapter.getInitialState({
  username: "",
  filterType: "none",
  filterValue: "none",
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserNameAction: (state, action) =>
      void (state.username = action.payload),
    addDataAction: (state, action) =>
      dataAdapter.addMany(state, action.payload),
    setIsSelectedAction: (state, action) =>
      dataAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          isSelected: action.payload.isSelected,
        },
      }),
    changeItemAction: (state, action) =>
      dataAdapter.updateOne(state, {
        id: action.payload.id,
        changes: {
          name: action.payload.name,
          height: action.payload.height,
          skin: action.payload.skin,
          eyes: action.payload.eyes,
          weight: action.payload.weight,
          gender: action.payload.gender,
          birth: action.payload.birth,
        },
      }),
    deleteItemAction: (state, action) =>
      dataAdapter.removeOne(state, action.payload),
    filterDataAction: (state, action) => {
      state.filterType = action.payload.filterType;
      state.filterValue = action.payload.filterValue;
    },
  },
});

const dataSelectors = dataAdapter.getSelectors((state) => state.data);

export const dataSelector = dataSelectors.selectAll;

// export const dataSelector = createSelector(allDataSelector, (items) => {
//   switch (items.filterType) {
//     case "bySkin":
//       return dataState.filter((i) => i.skin === dataState.filterValue);
//     case "byEyes":
//       return dataState.filter((i) => i.skin === dataState.filterValue);
//     case "byGender":
//       return dataState.filter((i) => i.skin === dataState.filterValue);
//     default:
//       return items;
//   }
// });

export const selectedItemSelector = createSelector(dataSelector, (items) =>
  items.find((e) => e.isSelected === true),
);

export const {
  setUserNameAction,
  addDataAction,
  setIsSelectedAction,
  changeItemAction,
  deleteItemAction,
  filterDataAction,
} = dataSlice.actions;

export default dataSlice.reducer;
