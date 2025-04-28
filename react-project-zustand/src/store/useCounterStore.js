import {create} from "zustand"

const useCounterStore = create((set, get) => ({
    count: 0,
    
    increase: () => set((state) => ({ count: state.count + 1 })),  // set의 콜백으로 상태를 바로 업데이트 (불변성 보장)

    decrease: () => set({ count: get().count - 1 }), // get()으로 현재 상태값을 직접 읽어서 업데이트

    reset: () => set({count: 0}), //기존값을 사용할 필요없이 count를 0으로 설정
}))

// create(() => {
// return 초기값;
//})

export default useCounterStore;