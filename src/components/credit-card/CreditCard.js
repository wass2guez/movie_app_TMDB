import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

export default class PaymentForm extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Congratulation ${this.state.name} You have finished payment!`);
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <Box key="Payment">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            mt: "16vh",
            opacity: "0.89",
          }}
          className="App-payment"
        >
          <Typography sx={{ textDecoration: "underline" }} variant="h1">
            Enter your payment details
          </Typography>
          <Typography variant="h4">
            please input your informations below
          </Typography>
          <Box sx={{ display: "flex" , ml:'100px'}}>
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
             
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml:'20px'
              }}
            >
              <form
                ref={(c) => (this.form = c)}
                onSubmit={this.handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Typography sx={{ flex: 1 }} variant="h6">
                    Name on card:
                  </Typography>

                  <TextField
                    label="Name"
                    id="demo-helper-text-aligned-no-helper"
                    name="name"
                    className="form-control"
                    pattern="[a-z A-Z-]+"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Typography sx={{ flex: 1 }} variant="h6">
                    Card Number:
                  </Typography>

                  <TextField
                    id="demo-helper-text-aligned-no-helper"
                    label="Card Number"
                    type="tel"
                    name="number"
                    className="form-control"
                    pattern="[\d| ]{16,22}"
                    maxLength="19"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Typography sx={{ flex: 1 }} variant="h6">
                    Expiration Date:
                  </Typography>

                  <TextField
                    type="tel"
                    label="Expiry"
                    name="expiry"
                    className="form-control"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    my: 1,
                  }}
                >
                  <Typography sx={{ flex: 1 }} variant="h6">
                    CVC:
                  </Typography>

                  <TextField
                    label="CVC"
                    type="tel"
                    name="cvc"
                    className="form-control"
                    pattern="\d{3}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                  />
                </Box>
                <input type="hidden" name="issuer" value={issuer} />

                <Button
                onClick={this.handleSubmit}
                  variant="contained"
                  sx={{ ml :'-25vh' , mt:'-4vh'  ,width: "120px" }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
