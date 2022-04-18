const User = require('../schemas/user.schemas');
const bcrypt = require('bcrypt');
const salt = 10;
const jwt = require('jsonwebtoken');
const secret = require('../config/config').secret;


async function addUser(req, res){
    try{
        if(!req.body.password || !req.body.fullName || !req.body.email ){ 
            return res.status(400).send('falta un campo obligatorio');
        }
        //Encriptamos la contraseña
        req.body.password = await bcrypt.hash(req.body.password, salt);


        let newUser = new User(req.body);
        await newUser.save()// Guardamos en la BD
        res.send({ usuarioNuevo: newUser })
    } catch(error){
        res.status(400).send('error')
    }
}

async function getUsers(req, res){
    const usuariosDB = await User.find()
    res.send({ users: usuariosDB })
}

async function getUser(req, res){
    //id que recibimos desde el endpoint
    const userId = req.query.user_id;
    //buscamos ese Id en nuestra BD
    const user = await User.findById(userId);
    console.log(user)
    // si no encontramos el usuario
    if(!user) return res.status(404).send ('no se encontro el usuario que busca');

    return res.status(200).send({ user: user })
}

async function deleteUser(req, res){
    
    const user_deleted = req.query.user_id;

    const user = await User.findByIdAndDelete(user_deleted);
    console.log(user);
    
    res.send({ userDeleted: user });
}

//UPADATE USER
async function updateUser(req, res) {
    const id = req.params.upd_id;

    const userChangesToApply = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, userChangesToApply, { new: true });
    if(!updatedUser) return res.status(404).send('No se encontro el usuario');
    
    return res.status(200).send(updatedUser)
}

//LOGIN
async function login (req, res){
    try{
        const email = req.body.email;
        const password = req.body.password;

//checkeamos que el usuario exista y nos traemos sus datos
        const userDB = await User.findOne({ email: req.body.email });
        if(!userDB) return res.status(404).send({ msg:'El suario no existe en nuestra BD' });

//comparamos password proveniente del front con el password del usuario
        const isValidPassword = await bcrypt.compare(password, userDB.password);
        if(!isValidPassword) return res.status(401).send({ msg:'Alguno de los datos ingresados no es correcto' });
        

//elimino del objeto user el password
        userDB.password = undefined;
        console.log(userDB);

//generamos un token de acceso
        const token = jwt.sign(userDB.toJSON(), secret, {expiresIn: 3000});

        return res.status(200).send({
            ok: true,
            msg:'Login correcto',
            user: userDB,
            token
        })

    } catch(error){
        res.status(400).send(error)
    }
}


module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    login,
    updateUser
}