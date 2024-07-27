import { useState } from "react";
import ColumnSelector from "./ColumnSelector";
import Phonebook from "./Phonebook";
function App() {
  const [columns, setColumns] = useState([
    { name: "ID", key: "id", isVisible: true },
    { name: "Name", key: "name", isVisible: true },
    { name: "Occupation", key: "occupation", isVisible: true },
    { name: "Email", key: "email", isVisible: true },
    { name: "Phone Number", key: "phoneNumber", isVisible: true },
    { name: "Address", key: "address", isVisible: true },
    { name: "Payment Term", key: "paymentTerm", isVisible: true },
    { name: "Note", key: "note", isVisible: true },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      occupation: "Software Engineer",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      paymentTerm: "Net 30",
      note: "Good client",
    },
    {
      id: 2,
      name: "John Martin",
      occupation: "Software Developer",
      email: "john.martin@example.com",
      phoneNumber: "965-958-7890",
      address: "123 Golden St",
      paymentTerm: "Net 40",
      note: "Nice one",
    },
    // Add more data as needed
  ]);

  const handleCheckboxChange = (index) => {
    const newColumns = [...columns];
    newColumns[index].isVisible = !newColumns[index].isVisible;
    setColumns(newColumns);
  };

  return (
    <>
      <h1 className="text-center">Showing and hiding columns in a Table</h1>
      <div className="max-width">
        <div className="d-flex justify-content-end">
          <ColumnSelector
            columns={columns}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <Phonebook data={data} columns={columns} />
      </div>
    </>
  );
}

export default App;
