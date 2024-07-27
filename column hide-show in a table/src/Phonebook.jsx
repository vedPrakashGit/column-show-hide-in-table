import React from 'react';

const PhonebookTable = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(
            (column, index) =>
              column.isVisible && <th key={index}>{column.name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(
              (column, colIndex) =>
                column.isVisible && <td key={colIndex}>{row[column.key]}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PhonebookTable;
