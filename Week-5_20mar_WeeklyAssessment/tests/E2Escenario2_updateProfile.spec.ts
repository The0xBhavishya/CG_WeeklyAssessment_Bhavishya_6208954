import{test} from "@playwright/test"
import Register from "../PageObjectModel/register.page"
import Login from "../PageObjectModel/signin.page"
import updateProfil from "../PageObjectModel/updateProfil.page"

test('profile' , async({page})=>{
const crm = new Register(page)
const login =new Login(page)
const profile = new updateProfil(page)

await crm.navi("http://49.249.28.218:8081/TestServer/Build/Small_CRM/registration.php")
await  crm.login();

await crm.ss();

await login.navilogin('http://49.249.28.218:8081/TestServer/Build/Small_CRM/login.php')
await login.loginUser();

await profile.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/profile.php')
await profile.update();



})
// http://49.249.28.218:8081/TestServer/Build/Small_CRM/profile.php