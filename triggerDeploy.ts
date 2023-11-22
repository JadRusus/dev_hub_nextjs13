import fetch from "node-fetch";

const url = `https://api.vercel.com/v1/integrations/deploy/prj_dcqvTY6x7EKseCJLrAl9r3henaIE/T5iGrgLaDh`;

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
