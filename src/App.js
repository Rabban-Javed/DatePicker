import React from 'react';
import DatePicker from './components/DatePicker';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Recurring Date Picker</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <DatePicker />
        </div>
      </div>
    </div>
  );
}

export default App;
