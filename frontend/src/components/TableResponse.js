import React from "react";

const TableResponse = ({ data }) => {
  if (!data || !data.headers || !data.rows) return null;

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="py-2 px-4 text-left font-semibold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="py-2 px-4 text-sm text-gray-800 dark:text-gray-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResponse;
