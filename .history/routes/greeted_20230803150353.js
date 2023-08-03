
export default function greeted() {

    async function showUser (req, res) {
        const users = await greetingService.getUsers()
        res.render("greeted", {
          users: users
        })
      }


    return {
        showUser
    }
}
