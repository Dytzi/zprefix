import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';

const Layout = ({userId}) => {
  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      <Navbar></Navbar>
        <p>Logged in as {userId}</p>
      <h1>Inventory Management System</h1>
      <Outlet />
    </Stack>
  );
};

export default Layout;
