

export default function counter_route() {

    async function get (req,res) {
        const userName = req.params.name;
        const users = await greeting.getUsers();
        const user = users.find(u => u.name === userName);
        
        res.render("counter", {
          user: user
        });
      }

    return {
        get
    }
}