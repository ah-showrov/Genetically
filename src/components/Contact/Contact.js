import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_euo1dkp",
        "template_tlxegfk",
        e.target,
        "user_EI6p0R0oBbrdfl2ODnzUD"
      )
      .then();
    e.target.reset();
  };

  return (
    <div className="contact-main-container">
      <Container maxWidth="lg" className="contact-container">
        <Box>
          <Typography variant="h3" className="contact-heading">
            {" "}
            Contact us
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
            laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box
          component="form"
          maxWidth="md"
          onSubmit={sendEmail}
          sx={{ margin: "55px auto 0 auto", padding: "0 15px" }}
        >
          <Grid container spacing={{ xs: 0, md: 4 }} sx={{ width: "100%" }}>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                required
                id="Name"
                name="name"
                placeholder="Your name"
                className="common-input-field name-field"
              />
              <input
                type="email"
                required
                id="Email"
                name="email"
                placeholder="Your email"
                className="common-input-field email-field "
              />
              <input
                type="number"
                id="Phone"
                name="phone"
                placeholder="Your Phone number (optional)"
                className="common-input-field phone-field "
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <textarea
                id="Message"
                name="message"
                placeholder="Your message"
                className="common-input-field message-field "
              />{" "}
              <Button
                sx={{
                  display: "inline-block",
                  marginTop: "25px",
                  width: "180px",
                  background: "#08C5B6",
                }}
                type="submit"
                variant="contained"
                className="contact-submit-button"
              >
                Send
              </Button>
            </Grid>{" "}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
