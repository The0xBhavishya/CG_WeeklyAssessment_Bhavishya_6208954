import{test,expect} from "@playwright/test"
import Register from "../PageObjectModel/register.page"
import createTicket from "../PageObjectModel/ticket.page"


import Login from "../PageObjectModel/signin.page"

test('crm' , async({page})=>{
const crm = new Register(page)
const login =new Login(page)
const ticket = new createTicket(page)

await crm.navi("http://49.249.28.218:8081/TestServer/Build/Small_CRM/registration.php")
await  crm.login();
await crm.ss();

await login.navilogin('http://49.249.28.218:8081/TestServer/Build/Small_CRM/login.php')
await login.loginUser();

await ticket.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/create-ticket.php')
await ticket.create();




})