import { getMockData } from '@/services/global';

export default {
  namespace: 'global',
  state: {
    a: 1,
  },
  effects: {
    * getMockData(_, { call, put }) {
      const res = yield call(getMockData);
      yield put({
        type: 'setMockData',
        payload: res,
      });
    },
  },
  reducers: {
    setMockData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
