import React , {useState} from 'react';

const person = {
  name: '',
  email: '',
  role: ''
}
function App() {
  const [formState, setFormState] = useState(person);

  const onChange = e => {
    setFormState(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <form>
    <div className="App">
    <label> Name:
      <input 
      type = 'text'
      onChange = {onChange}
      />
    </label>
    <label> Email:
      <input 
      type = 'text'
      onChange = {onChange}
      />
    </label>
    <label> Role:
      <input 
      type = 'text'
      onChange = {onChange}
      />
    </label>
      
    </div>
    <button onSubmit ={handleSubmit}>Submit</button>
    </form>
);
}

export default App;
