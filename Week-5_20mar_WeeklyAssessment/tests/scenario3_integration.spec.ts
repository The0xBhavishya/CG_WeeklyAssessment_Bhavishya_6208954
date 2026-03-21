import{test,expect} from "@playwright/test"
import Register from "../PageObjectModel/register.page"
import createTicket from "../PageObjectModel/ticket.page"
import validateTicket from "../PageObjectModel/validateTicket.page"

import Login from "../PageObjectModel/signin.page"

test('crm' , async({page})=>{
const crm = new Register(page)
const login =new Login(page)
const ticket = new createTicket(page)
const viewTicket = new validateTicket(page)


await crm.navi("http://49.249.28.218:8081/TestServer/Build/Small_CRM/registration.php")
await  crm.login();

await crm.ss();

await login.navilogin('http://49.249.28.218:8081/TestServer/Build/Small_CRM/login.php')
await login.loginUser();

await ticket.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/create-ticket.php')
await ticket.create();

await viewTicket.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/view-tickets.php')
await viewTicket.validate();


})