import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <div className="d-flex flex-wrap gap-3 mt-2">
      {device.brands.map(brand =>
        <Card
          key={brand.id}
          className="p-3"
          style={{cursor: "pointer"}}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      )}
    </div>
  );
});

export default BrandBar;