import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
export default function InputWithIcon({ setSearchValue }) {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault(); //
          setSearchValue(value);
        }}
      >
        <Input
          id="carName"
          placeholder="Car name"
          name="carName"
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          value={value}
          startAdornment={
            <InputAdornment position="start">
              <DirectionsCarIcon />
            </InputAdornment>
          }
        />
        <IconButton type="submit" aria-label="submit">
          <SearchIcon />
        </IconButton>
      </form>
    </Box>
  );
}
