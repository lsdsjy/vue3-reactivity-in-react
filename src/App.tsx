import { useEffect, useReducer } from "react";
import { Ref, ref, watch } from "vue";

const state = ref(0);

function useVueState<T>(state: Ref<T>) {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    watch(state, forceUpdate);
  }, []);
  return state;
}

function App() {
  const count = useVueState(state);
  return (
    <>
      <h1>{count.value}</h1>
      <button onClick={() => count.value++}>+</button>
    </>
  );
}

export default App;
