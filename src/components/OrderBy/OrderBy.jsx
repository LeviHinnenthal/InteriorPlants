import { React, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const OrderBy = () => {
  const [selectedOrder, setSelectedOrder] = useState("Recommended");

  const handleItemClick = (value) => {
    setSelectedOrder(value);
  };

  return (
    <Select label="Order by" className="max-w-xs">
      <SelectItem onClick={() => handleItemClick("Price descending")}>
        Price descending
      </SelectItem>
      <SelectItem onClick={() => handleItemClick("Price ascending")}>
        Price descending
      </SelectItem>
      <SelectItem onClick={() => handleItemClick("Name A-Z")}>
        Name A-Z
      </SelectItem>
      <SelectItem onClick={() => handleItemClick("Name Z-A")}>
        Name Z-A
      </SelectItem>
    </Select>
  );
};

export default OrderBy;
