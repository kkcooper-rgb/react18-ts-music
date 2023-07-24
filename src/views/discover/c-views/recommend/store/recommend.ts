import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

export const fetchBanners = createAsyncThunk('recommend/fetchBanners', async (arg, { dispatch }) => {
  const res = await getBanners();
  console.log(res);
  dispatch(changeBannerAction(res.banners));
  // return res.data;
});
interface IBannerRoot {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: string;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any;
  monitorClickList: any;
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  adDispatchJson: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  song: any;
  scm: string;
  bannerBizType: string;
}
let banners: IBannerRoot[] = [];
const recommendSlic = createSlice({
  name: 'recommend',
  initialState: {
    banners,
  },
  reducers: {
    changeBannerAction(state, action) {
      state.banners = action.payload;
    },
  },
});
export const { changeBannerAction } = recommendSlic.actions;
export default recommendSlic.reducer;
