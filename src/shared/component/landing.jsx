import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <Paper elevation={10}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Login</Button>
              <Link className="link" color="inherit" to="/contactUs">
                Contact Us
              </Link>
              <Link className="link" color="inherit" to="/aboutUs">
                About Us
              </Link>
            </Stack>
          </Paper>
        </Item>
      </Grid>
    </Grid>
  );
}
