//import * as React from 'react';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect, useState } from "react";

export default function FreeSolo() {
  const [loading, setLoading] = useState(false);

  const currency = [
    { title: "USD", value: "USD" },
    { title: "INR", value: "INR" },
    { title: "AED", value: "AED" }
  ];

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={currency.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Current Currency" />
        )}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={currency.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Convert Currency"
            InputProps={{
              ...params.InputProps,
              type: "search"
            }}
          />
        )}
      />
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Custom Value $ </span>
        <InputNumber placeholder="Price" />
        <span className="p-inputgroup-addon">.00</span>
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Enter Amount $ </span>
        <InputNumber placeholder="Price" />
        <span className="p-inputgroup-addon">.00</span>
      </div>

      <div className="card flex flex-wrap justify-content-center gap-3">
        <Button
          label="convert"
          icon="pi pi-check"
          loading={loading}
          onClick={load}
        />
      </div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">Update Amount $</span>
        <InputNumber placeholder="Price" />
        <span className="p-inputgroup-addon">.00</span>
      </div>
    </Stack>
  );
}
