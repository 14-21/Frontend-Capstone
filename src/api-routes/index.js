import { useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "localhost:8080"


// REGISTER
export const registerUser = async (username, password, fname, lname, email, pic) => {
    try {
            // MOCK API to see if function works, it does. URL will need to be changed once Our API is complete.
            const response = await fetch(`https://64986b389543ce0f49e20545.mockapi.io/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
            fname: fname,
            lname: lname,
            email: email,
            pic: pic
          },
        }),
      });
      const result = await response.json();
      // console.log(result, "result");
      return result;
    } catch (error) {
      console.log(error);
    }
    return;
  };

// LOGIN  
export const loginUser = async (username, password) => {
    try {
        // MOCK API to see if function works, it does. URL will need to be changed once Our API is complete.
      const response = await fetch(`https://64986b389543ce0f49e20545.mockapi.io/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }); // Outside of fetch starting here.
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
    return;
  }