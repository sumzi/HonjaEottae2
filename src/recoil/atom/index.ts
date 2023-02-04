import ATOM_KEY from '@/constants/atomKey';
import { atom } from 'recoil';

const areaState = atom({
  key: ATOM_KEY.AREA,
  default: {
    areaCode: '',
    sigunguCode: '',
    title: '전체',
    pageNo: 1,
  },
});

export { areaState };
