import { checkAuth } from "./src/check-auth.js";

checkAuth('https://fbb2-2405-201-2018-5084-bc49-1463-5ce6-56c6.ngrok-free.app/v1/auth', '1eq9NU9ZogfQlVihD9VhWENGGA23', 'createRole').then((x) => {
  console.log(x);
})