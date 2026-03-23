import{test} from "@playwright/test"
import updateProfil from "../PageObjectModel/updateProfil.page"

test('c4' , async({page})=>{
const profile = new updateProfil(page)
await profile.navi('http://49.249.28.218:8081/TestServer/Build/Small_CRM/profile.php')
await profile.update();

})