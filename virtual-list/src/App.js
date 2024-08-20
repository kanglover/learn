import FixedHeightVirtualList from './FixedHeightVirtualList';
import VariableHeightVirtualList from './VariableHeightVirtualList';

function App() {
  return (
    <div>
      <h1>Virtual List Fixed Height Example</h1>
      <FixedHeightVirtualList />
      <h1>Variable Height Virtual List Example</h1>
      <VariableHeightVirtualList />
    </div>
  );
}

export default App;
