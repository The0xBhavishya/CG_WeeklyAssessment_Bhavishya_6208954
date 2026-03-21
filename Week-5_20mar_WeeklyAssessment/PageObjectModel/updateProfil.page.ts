import profileData from "../utility/updateProfile.json"
class updateProfil{
    page:any
    name :any
  
    altemail:any
    contactno:any
    gender:any
    address:any
    clickUpdate:any

    constructor(page){
        this.page=page;
        this.name=page.locator('[name="name"]')
        this.altemail=page.locator('[name="alt_email"]')
        this.contactno=page.locator('[name="phone"]')
        this.gender=page.locator('[name="gender"]')
        this.address=page.locator('[name="address"]')
        this.clickUpdate=page.locator('[name="update"]')
    }

    async navi(url:string){
        await this.page.goto(url)
    }

    async update(){
       await this.name.fill(profileData.name)
       await this.altemail.fill(profileData.altemail)
       await this.contactno.fill(profileData.contact)
       await this.gender.selectOption(profileData.gender)
       await this.address.fill(profileData.address)
       await this.clickUpdate.click()
    }


}

export default updateProfil