import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "rgb(2, 11, 40)",
      color: "#fff",
    },
  },
});

export default function ContactUS() {
  const classes = useStyles();
  function handelSubmet(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      <Box
        sx={{
          position: "relative",
          paddingBlock: "20px",
          overflow: "hidden",
          backgroundColor: "#E8EDF5",
        }}
        component={"section"}
      >
        <Container
          sx={{
            paddingBlock: "20px",
          }}
        >
          <Box className="row" sx={{ display: "flex", gap: "40px" }}>
            <Box className="col" sx={{ width: "40%" }}>
              <Typography
                sx={{
                  fontFamily: " Montserrat",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "56px",
                  letterSpacing: "-0.125rem",
                  color: "#213F57",
                }}
              >
                Get in touch with us
              </Typography>
              <Typography
                sx={{
                  fontFamily: " Montserrat",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "32px",
                  marginTop: "20px",
                }}
              >
                We know that sometimes a personal conversation is the best
                solution. If you need immediate support or have specific
                questions, don't hesitate to call or email us. Our dedicated
                team is available to discuss your concerns and help you further.
              </Typography>
            </Box>

            <Box className="col" sx={{ width: "60%", marginLeft: "30px" }}>
              <form
                onSubmit={(e) => handelSubmet(e)}
                noValidate
                style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}
              >
                <TextField
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder="Full Name"
                  sx={{
                    width: "47%",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                  color="primary"
                  placeholder="Phone Number"
                  sx={{
                    width: "47%",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  color="primary"
                  placeholder="Email"
                  sx={{
                    width: "47%",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label="Company"
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder="Company"
                  sx={{
                    width: "47%",
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  type="text"
                  color="primary"
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                  }}
                />
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  sx={{
                    ml: "auto",
                    width: "281px",
                    height: "48px",
                    borderRadius: "32px",
                    backgroundColor: "#04113A",
                    color: "#fff",
                  }}
                  disableElevation
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "24px",
                      lineHeight: "24px",
                    }}
                  >
                    Submit
                  </Typography>
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
