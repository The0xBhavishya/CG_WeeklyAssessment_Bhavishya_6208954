import data from "../utility/register.json"
class Register{
page:any
name:any
email:any
password:any
repassword:any
contactno:any
agree:any
gender:any
submit:any

    constructor(page){
        this.page=page
   this.name=page.locator('#name')
  this.email=page.locator('#email')
   this.password=page.locator('#password')
   this.repassword=page.locator('#cpassword')
  this.contactno=page.locator('#txtpassword')
  this.gender=page.locator('[value="m"]')
  this.submit=page.locator('[name="submit"]')
} 

async navi(url:string){
    await this.page.goto(url)
}

async login(){
await this.name.fill(data.name)
await this.email.fill(data.email)
await this.password.fill(data.password)
await this.repassword.fill(data.repass)
await this.contactno.fill(data.contact)
await this.gender.click()
await this.submit.click()
}

async ss(){
    await this.page.screenshot({
    path: "day23_task1.png",  });
}
 



}

export default Register