import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AppRoutes from "./shared/component/AppRoutes";
import { messaging } from "./firebase-config";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";

export default function App() {
  const generatePushNotificationToken = () => {
    getToken(messaging, {
      vapidKey:
        "BCVMqBsuedTg4XdxpplNu4fB4o06t2OhKQnZWTIe2jH2RANSZHxbD5cZUjnT8LjvMb14W8C9DEEA0Qh_cbRmeHg",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Success - Firebase cloud messaging token");
          console.log(currentToken);
        } else {
          console.log("Error - Firebase cloud messaging token");
        }
      })
      .catch((err) => {
        console.log("Error - Firebase cloud messaging token");
      });
  };

  useEffect(() => {
    generatePushNotificationToken();
  }, []);

  return <AppRoutes></AppRoutes>;
}
