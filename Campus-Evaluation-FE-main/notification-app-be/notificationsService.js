import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export async function fetchNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWE2NjE4QGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzgzNDgwLCJpYXQiOjE3ODIzODI1ODAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkYzVjMWQzMy03ZGYzLTRlNjUtYmI2Ni05ODQ5ZWU2OGQzMDMiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwYXN1cHVub29yaSB2YW1zaGkga3Jpc2huYSIsInN1YiI6IjlkYTdlNDE5LTQ4MmMtNDgyNi1hOGIwLWY1MTEyZmRkZTAwNyJ9LCJlbWFpbCI6IjI0MjE1YTY2MThAYnZyaXQuYWMuaW4iLCJuYW1lIjoicGFzdXB1bm9vcmkgdmFtc2hpIGtyaXNobmEiLCJyb2xsTm8iOiIyNDIxNWE2NjE4IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiOWRhN2U0MTktNDgyYy00ODI2LWE4YjAtZjUxMTJmZGRlMDA3IiwiY2xpZW50U2VjcmV0IjoiZUtVRXFoZ3NlV0tuUEZ3ZyJ9.6r0527z0xnvAhwlzexniyab5eOWakZQfZ8Cps5rOhoc"
      }
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    return [];
  }
}