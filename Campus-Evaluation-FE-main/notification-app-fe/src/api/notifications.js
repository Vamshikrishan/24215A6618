const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

// Your Bearer token
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDIxNWE2NjE4QGJ2cml0LmFjLmluIiwiZXhwIjoxNzgyMzc0ODYxLCJpYXQiOjE3ODIzNzM5NjEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5OTU0YWYyMi1mMzZjLTQ2OGEtYTcxOC0wNTI2NTUzYzdiYmMiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwYXN1cHVub29yaSB2YW1zaGkga3Jpc2huYSIsInN1YiI6IjlkYTdlNDE5LTQ4MmMtNDgyNi1hOGIwLWY1MTEyZmRkZTAwNyJ9LCJlbWFpbCI6IjI0MjE1YTY2MThAYnZyaXQuYWMuaW4iLCJuYW1lIjoicGFzdXB1bm9vcmkgdmFtc2hpIGtyaXNobmEiLCJyb2xsTm8iOiIyNDIxNWE2NjE4IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiOWRhN2U0MTktNDgyYy00ODI2LWE4YjAtZjUxMTJmZGRlMDA3IiwiY2xpZW50U2VjcmV0IjoiZUtVRXFoZ3NlV0tuUEZ3ZyJ9.gE5zg3GgRMIfYL18_pav2EdeIulgxgwB1PZAQ_gQN54";

export async function fetchNotifications() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.json();
}