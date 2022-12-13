import Form from "./components/Form/Form";

function App() {
  return (
    <div className="flex px-32 justify-between items-center relative">
      <Form />
        <div className='relative'>
            <img src={require('./assets/pngegg.png')} className='w-32 h-32 absolute -left-36 -bottom-4'/>
            <img alt='hello' src='https://static.vecteezy.com/system/resources/thumbnails/012/224/866/small/santa-claus-rides-in-sleigh-with-christmas-tree-free-png.png' />
        </div>
    </div>
  );
}

export default App;
