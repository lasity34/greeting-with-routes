


export default function greeting_route(greetingService) {
    
  async function add(req, res) {
    await greetingService.setLanguage(req.body.language);
    const message = await greetingService.greetMessage(req.body.name);

    req.flash("info", message);
    res.redirect("/");
  }

  return {
   add,

  };
}
