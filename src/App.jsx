
import { useRef } from 'react';
import Hero from './assets/component/Hero';
const App = () => {

  let titleText = useRef();

  const TextChange =()=>{
    titleText.current.classList.remove('text-success');
    titleText.current.classList.add('text-danger');
  }

 
  return (
    <div>
      <h1 className='text-success' ref={titleText}>sakib hasanbadhon</h1>
      <button onClick={TextChange}>Show</button>
    </div>
  );
};

export default App;