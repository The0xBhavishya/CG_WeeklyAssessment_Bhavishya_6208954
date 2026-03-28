// scenario 5 is about to create and book a ticket 
import{test,expect} from "@playwright/test"
import createTicket from "../PageObjectModel/ticket.page"
test('book ticket ' , async({page})=>{
const ticket = new createTicket(page)
await ticket.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/create-ticket.php')
await ticket.create();
})