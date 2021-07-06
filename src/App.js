import './App.css';
import TitleBar from './TitleBar'
import MenuBar from './MenuBar'
import MenuIconBar from './MenuIconBar'
import FormulaBar from './FormulaBar'
import DataContainer from './DataContainer'
import SheetBar from './SheetBar'

function App() {
  return (
    <div className="app">
      <TitleBar/>
      <MenuBar/>
      <MenuIconBar />
      <FormulaBar />
      <DataContainer/>
      <SheetBar />
    </div>
  );
}

export default App;
