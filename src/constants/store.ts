import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

interface States {
  bears: number;
  increase: (by: number) => void;
  clear: () => void;
}

const initialState = {
  bears: 0,
};

const useCaches = create<States>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        increase: by => set(state => ({bears: state.bears + by})),
        /** 初始化默认状态 */
        clear: () => {
          set(initialState);
        },
      }),
      {
        storage: createJSONStorage(() => AsyncStorage),
        name: 'useCaches.ts',
        /** 白名单 */
        partialize: state => ({
          bears: state.bears,
        }),
      },
    ),
  ),
);

export {useCaches};
