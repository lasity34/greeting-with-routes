

export default function counter_route(greetingService) {

    async function get (req,res) {
        const userName = req.params.name;
        const users = await greetingService.getUsers();
        const user = users.find(u => u.name === userName);
        
        res.render("counter", {
          user: user
        });
      }

    return {
        get
    }
}