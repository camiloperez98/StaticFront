//Importar módulos
const express = require('express')
const app = express()
const path = require('path') //Rutas
const hbs = require('hbs')

const puerto = 8084

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname + '/public/views'))
app.set('view engine', 'hbs') //Motor de plantilla

//Configuración del directorio que guardará los archivos partial hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res)=>{
    res.render('home',{
        titulo: 'home',
        nombre: 'home'
    })
    
    
})

app.get('/olvidocontra', (req, res)=>{
    res.render('olvidocontra',{
        titulo: 'olvidocontra',
        nombre: 'olvidocontra'
    })
    
    
})

app.get('/nuevacontra', (req, res)=>{
    res.render('nuevacontra',{
        titulo: 'nuevacontra',
        nombre: 'nuevacontra'
    })
    
    
})

app.get('/alertas', (req, res)=>{
    res.render('alertas',{
        titulo: 'Alertas',
        nombre: 'Alertas'
    })
    //res.write('home')
    //res.end()
})

app.get('/crearaler', (req, res)=>{
    res.render('crearaler',{
        titulo: 'crearaler',
        nombre: 'crearaler'
    })
    //res.write('home')
    //res.end()
})

app.get('/editaralerta', (req, res)=>{
    res.render('editaralerta',{
        titulo: 'Editar Alerta',
        nombre: 'Editar Alerta'
    })
    //res.write('home')
    //res.end()
})

app.get('/productos', (req, res)=>{
    res.render('productos',{
        titulo: 'Productos',
        nombre: 'Productos'
    })
    //res.write('home')
    //res.end()
})

app.get('/crearprod', (req, res)=>{
    res.render('crearprod',{
        titulo: 'crearprod',
        nombre: 'crearprod'
    })
    //res.write('home')
    //res.end()
})

app.get('/crearprov', (req, res)=>{
    res.render('crearprov',{
        titulo: 'crearprov',
        nombre: 'crearprov'
    })
    //res.write('home')
    //res.end()
})

app.get('/proveedores', (req, res)=>{
    res.render('proveedores',{
        titulo: 'Proveedores',
        nombre: 'Proveedores'
    })
    //res.write('home')
    //res.end()
})
app.get('/compras', (req, res)=>{
    res.render('compras',{
        titulo: 'Compras',
        nombre: 'Compras'
    })
    //res.write('home')
    //res.end()
})
app.get('/crearcom', (req, res)=>{
    res.render('crearcom',{
        titulo: 'crearcom',
        nombre: 'crearcom'
    })
    //res.write('home')
    //res.end()
})
app.get('/clientes', (req, res)=>{
    res.render('clientes',{
        titulo: 'Clientes',
        nombre: 'Clientes'
    })
    //res.write('home')
    //res.end()
})
app.get('/usuarios', (req, res)=>{
    res.render('usuarios',{
        titulo: 'Usuarios',
        nombre: 'Usuarios'
    })
    //res.write('home')
    //res.end()
})
app.get('/crearusuario', (req, res)=>{
    res.render('crearusuario',{
        titulo: 'crearusuario',
        nombre: 'crearusuario'
    })
    //res.write('home')
    //res.end()
})
app.get('/crearcli', (req, res)=>{
    res.render('crearcli',{
        titulo: 'crearcli',
        nombre: 'crearcli'
    })
    //res.write('home')
    //res.end()
})

app.get('/editarCliente', (req, res)=>{
    res.render('editarCliente',{
        titulo: 'editarCliente',
        nombre: 'editarCliente'
    })
    //res.write('home')
    //res.end()
})

app.get('/editarProducto', (req, res)=>{
    res.render('editarProducto',{
        titulo: 'editarProducto',
        nombre: 'editarProducto'
    })
    //res.write('home')
    //res.end()
})

app.get('/editarUsuario', (req, res)=>{
    res.render('editarUsuario',{
        titulo: 'editarUsuario',
        nombre: 'editarUsuario'
    })
    //res.write('home')
    //res.end()
})
app.get('/editarproveedor', (req, res)=>{
    res.render('editarproveedor',{
        titulo: 'editarproveedor',
        nombre: 'editarproveedor'
    })
    //res.write('home')
    //res.end()
})
app.get('/registrarse', (req, res)=>{
    res.render('registrarse',{
        titulo: 'registrarse',
        nombre: 'registrarse'
    })
    //res.write('home')
    //res.end()
})

app.get('/ventas', (req, res)=>{
    res.render('ventas',{
        titulo: 'Ventas',
        nombre: 'Ventas'
    })
    //res.write('home')
    //res.end()
})

app.get('/crearventa', (req, res)=>{
    res.render('crearventa',{
        titulo: 'crearventa',
        nombre: 'crearventa'
    })
    //res.write('home')
    //res.end()
})

app.get('/editarVenta', (req, res)=>{
    res.render('editarVenta',{
        titulo: 'editarVenta',
        nombre: 'editarVenta'
    })
    //res.write('home')
    //res.end()
})

app.get('/ordencompra', (req, res)=>{
    res.render('ordencompra',{
        titulo: 'ordencompra',
        nombre: 'ordencompra'
    })
    //res.write('home')
    //res.end()
})

app.get('/crearordencompra', (req, res)=>{
    res.render('crearordencompra',{
        titulo: 'crearordendecompra',
        nombre: 'crearordendecompra'
    })
    //res.write('home')
    //res.end()
})

app.get('/dashboard', (req, res)=>{
    res.render('dashboard',{
        titulo: 'dashboard',
        nombre: 'dashboard'
    })
    //res.write('home')
    //res.end()
})

app.listen(puerto, ()=>{
    console.log(`Escuchando por el puerto ${puerto}`)
})