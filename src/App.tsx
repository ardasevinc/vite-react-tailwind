import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='h-screen bg-slate-900 text-white/90 flex flex-col justify-center items-center'>
      <p className='text-4xl'>Hello World</p>
    </div>
  );
}

export default App;
