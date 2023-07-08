import React, { useState } from 'react'

const TableOfNum = () => {
    const [num, setNum] = useState('');
    const [numTable, setNumTable] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        setNum(value);
        generateTable(value);
    }

    const generateTable = (value) => {
        const tableOfNum = [];

        for(let i=1; i<=10; i++) {
            tableOfNum.push(
                <tr key={i}>
                    <td>
                        {`${value} * ${i} = ${value * i}`}
                    </td>
                </tr>
            )
        }

        setNumTable(tableOfNum);
    }
  return (
    <div>
        <form>
            <input type="number" placeholder='Enter any number to generate its table' value={num} onChange={handleInput} />
        </form>

        {numTable.length > 0 && (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Table of {num}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {numTable}
                    </tbody>
                </table>
            </div>
        ) }
    </div>
  );
}

export default TableOfNum