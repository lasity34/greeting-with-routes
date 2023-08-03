

export default function greeting_route() {
    async  (req, res) => {
        await greeting.setLanguage(req.body.language);
        const message = await greeting.greetMessage(req.body.name);
        
        req.flash("info", message);
        res.redirect("/");
    }
}