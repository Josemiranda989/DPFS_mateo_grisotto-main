function loggedAuth(req,res,next){
    if(req.session?.userLogged){
        return res.redirect("/users/profile");
    }

    next();
}
module.exports = loggedAuth;