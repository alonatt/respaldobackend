from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class PerfilVendedor(db.Model):
    id_vendor = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastName = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    InitialAddress = db.Column(db.String(50))
    phone = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def serialize(self):
        return {
            "id_vendor": self.id_vendor,
            "email": self.email,
            "lastName": self.lastName,
            "email": self.email,
            "rut": self.rut,
            "InitialAddress": self.address,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }

class Encomiendas(db.Model):
    id_package = db.Column(db.Integer, db.ForeignKey('perfilvendedor.id_vendor'), primary_key=True,)
    status = db.Column(db.String(50), unique=False, nullable=False)
    destinationAddress = db.Column(db.String(50), unique=False, nullable=False)
    originAddress = db.Column(db.String, db.ForeignKey('perfilvendedor.InitialAdress'))
    zone = db.Column(db.String(50), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    rel = db.relationship('Perfilvendedor')

    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
        }

class PedidoAceptado(db.Model):
    id_package = db.Column(db.Integer, db.ForeignKey('encomiendas.id_package'), primary_key=True)
    status = db.Column(db.String(50), db.ForeignKey('encomiendas.status'), unique=False, nullable=False)
    destinationAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.destinationAddress'), unique=False, nullable=False)
    originAddress = db.Column(db.String(50), db.ForeignKey('encomiendas.originAddress'), unique=False, nullable=False)
    zone = db.Column(db.String(50), db.ForeignKey('encomiendas.zone'), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    rel = db.relationship('Encomiendas')


    def serialize(self):
        return {
            "id_package": self.id_package,
            "status": self.status,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
        }

class Tarifas(db.Model):
    id_transport = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.String(50), unique=False, nullable=False)
    destinationAddress = db.Column(db.String(50), db.ForeignKey('pedidoaceptado.destinationAdress'), unique=False, nullable=False)
    originAddress = db.Column(db.String(50), db.ForeignKey('pedidoaceptado.originAdress'), unique=False, nullable=False)
    zone = db.Column(db.String(50), db.ForeignKey('pedidoaceptado.zone'), unique=False, nullable=False)
    rel = db.relationship('PedidoAceptado')
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def serialize(self):
        return {
            "id_package": self.id_package,
            "price": self.price,
            "destinationAddress": self.destinationAddress,
            "originAddress": self.originAddress,
            "zone": self.zone,
        }

class PerfilTransportista(db.Model):
    id_transport = db.Column(db.Integer, db.ForeignKey('tarifas.id_transport'), primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastName = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    rut = db.Column(db.String(50), unique=True, nullable=False)
    TransAddress = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    rel = db.relationship('Tarifas')


    def serialize(self):
        return {
            "id_transport": self.id_transport,
            "email": self.email,
            "lastName": self.lastName,
            "email": self.email,
            "rut": self.rut,
            "TransAddress": self.initialaddress,
            "phone": self.phone,
        }