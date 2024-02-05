
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjU3N2Q4YjBjZTIxZDYyYjRiNDNiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzE2NTU5NywiZXhwIjoxNzA3NDI0Nzk3fQ.6cCdxmnvF5TZTGutlmRhHkIaVxPw9DOgsQSZ5nWeQlY"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});