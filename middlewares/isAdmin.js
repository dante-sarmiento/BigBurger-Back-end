const isAdmin = (req, res, next) => {
    if(req.user.role !== 'ADMINISTRADOR') return res.status(401).send('no tiene los permisos necesarios para borrar un usuario');
    next();
}

module.exports = isAdmin;