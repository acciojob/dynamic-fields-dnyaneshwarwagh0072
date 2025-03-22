
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: "", age: "" }])

  const addField = () => {
    setFields([...fields, { id: Date.now(), name: "", age: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleChange = (id, event) => {
    const { name, value } = event.target;
    setFields(fields.map(field => field.id === id ? { ...field, [name]: value } : field));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", fields);
  };


  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="flex space-x-2 items-center">

            <TextField
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              value={field.name}
              onChange={(e) => handleChange(field.id, e)}
              className="flex-1"
            />

            <TextField
              type="number"
              name="age"
              label="Age"
              variant="outlined"
              value={field.age}
              onChange={(e) => handleChange(field.id, e)}
              className="flex-1"
            />

            <Button type="button" onClick={() => removeField(field.id)} variant="contained" color="error">Remove</Button>
          </div>
        ))}

        <Button type="button" onClick={addField} variant="contained" color="primary">Add Field</Button>

        <Button type="submit" variant="contained" color="success">Submit</Button>
      </form>
    </div>
  )
}

export default App
