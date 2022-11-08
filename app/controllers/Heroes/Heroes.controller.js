let Heroes = [{
    "id": 1,
    "nombre": "Superman"
}]

const getHeroes = async (req, res) => {
    try {
        return res.send({
            ok: true,
            message: "Heroes consultados",
            content: Heroes
        });
    } catch (error) {
        console.log(error);
        return res.send({
            ok: false,
            message: "Error consultando los Heroes",
            content: error,
        });
    }
};

const createHeroe = async (req, res) => {
    try {
        let heroe = req.body;
        if (heroe.nombre) {
            heroe = {
                "id": Heroes.length + 1,
                "nombre": heroe.nombre
            }
            Heroes.push(heroe)
        } else {
            return res.send({
                ok: false,
                message: "El Heroe no fue creado, ingrese nombre del heroe"
            });
        }
        return res.send({
            ok: true,
            message: "Heroe creado",
            content: heroe,
        });
    } catch (error) {
        console.log(error);
        return res.send({
            ok: false,
            message: "Error creado el Heroe",
            content: error,
        });
    }
};

const updateHeroe = async (req, res) => {
    let id = req.params.id;
    let actualizado
    try {
        for (let i = 0; i < Heroes.length; i++) {
            if (Heroes[i].id == id) {
                if (req.body.nombre) {
                    Heroes[i].nombre = req.body.nombre;
                    actualizado = i
                } else {
                    return res.send({
                        ok: false,
                        message: "Error actualizando el Heroe, por favor ingrese un nombre",
                        content: error,
                    });
                }
                break;
            }
        }
        if (!actualizado) {
            return res.send({
                ok: false,
                message: "El Heroe no existe"
            });
        } else {
            return res.send({
                ok: true,
                message: "Heroe actualizado",
                content: Heroes[actualizado],
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            ok: false,
            message: "Error actualizando el Heroe",
            content: error,
        });
    }
};

const deleteHeroe = async (req, res) => {
    let id = req.params.id;
    let eliminado = []
    try {
        for (let i = 0; i < Heroes.length; i++) {
            if (Heroes[i].id == id) {
                eliminado.push(Heroes[i].id)
                Heroes.splice(i, 1);
                break;
            }
        }
        if (!eliminado) {
            return res.send({
                ok: false,
                message: "El Heroe no existe"
            });
        } else {
            return res.send({
                ok: true,
                message: "Heroe eliminado",
                content: eliminado,
            });
        }
    } catch (error) {
        console.log(error);
        return res.send({
            ok: false,
            message: "Error eliminando el Heroe",
            content: error,
        });
    }
};

module.exports = {
    getHeroes,
    createHeroe,
    updateHeroe,
    deleteHeroe
};