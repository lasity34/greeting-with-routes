
export default function greeted_route(greetingService) {

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
