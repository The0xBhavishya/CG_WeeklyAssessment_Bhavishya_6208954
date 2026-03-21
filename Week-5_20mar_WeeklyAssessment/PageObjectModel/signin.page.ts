import data from "../utility/register.json"
class Login{
    page:any
    email:any
    password:any
    loginbtn:any

    constructor(page){
        this.page=page
        this.email=page.locator('#txtusername')
        this.password=page.locator('[name="password"]')
        this.loginbtn=page.locator('button[type="submit"]')
    }

    async navilogin(url:string){
        await this.page.goto(url)
    }
    async loginUser(){
        await this.email.fill(data.email)
        await this.password.fill(data.password)
        await this.loginbtn.click()

    }


    
}

export default Login