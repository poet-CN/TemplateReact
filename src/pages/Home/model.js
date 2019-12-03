export default {
  namespace: 'home',
  state: {
    name: 'untitled',
  },
  effects: {
    * getName(_, { put }) {
      yield put({
        type: 'setName',
        payload: { name: 'Home' },
      });
    },
  },
  reducers: {
    setName(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
