import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const {Context, Provider} = createDataContext(authReducer, {}, {});
