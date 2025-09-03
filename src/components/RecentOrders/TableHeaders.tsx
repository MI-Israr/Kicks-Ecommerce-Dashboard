interface Column {
  key: string;
  label: string;
  align?: "start" | "center" | "right" | string;
  withCheckbox?: boolean;
}

interface TableHeaderProps {
  columns: Column[];
  showCheckbox?: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, showCheckbox }) => {
  return (
    <thead className="border-b border-gray-300">
      <tr>
        {/* {showCheckbox && (
          <th className="text-start input-box">
            <input type="checkbox" />
          </th>
        )} */}
        {columns.map((col) => (
          <th
            key={col.key}
            className={`px-3 py-2 text-${col.align} font-medium text-gray-700`}
          >
            {showCheckbox && col.key === "product" && (
              <input className="!mr-3" type="checkbox" />
            )}
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
