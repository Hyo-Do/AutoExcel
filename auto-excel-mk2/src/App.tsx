import BottomBar from "./components/BottomBar";
import FileForm from "./components/FileForm";
import NumberForm from "./components/NumberForm";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <>
      <TitleBar />
      <FileForm />
      <NumberForm type1="A" type2="min" />
      <NumberForm type1="A" type2="max" />
      <NumberForm type1="V" type2="min" />
      <NumberForm type1="V" type2="max" />
      <BottomBar />
    </>
  );
}

export default App;
