const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');

// Configurando el transporte para enviar correos (Usa las credenciales de tu cuenta de Gmail)
// ¡IMPORTANTE! Para que esto funcione con Gmail, es posible que necesites habilitar el "Acceso de apps menos seguras" en la configuración de tu cuenta de Google.
// Sin embargo, esta opción puede ser menos segura. Para producción, considera usar un servicio como SendGrid o Mailgun.
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'cartorsdb@gmail.com', // Reemplazar con el correo
    pass: 'cdb12345'   // Reemplazar con la contraseña del correo de gmail
  }
});

exports.sendContactEmail = functions.database.ref('/mensajes-contacto/{pushId}')
  .onCreate((snapshot, context) => {
    const newMessage = snapshot.val();

    const mailOptions = {
      from: 'Formulario de Contacto Cartor\'s SAS <cartorsdb@gmail.com>',
      to: 'cartorsdb@gmail.com', // La dirección a la que quieres enviar el correo
      subject: 'Nuevo mensaje de contacto desde el sitio web',
      html: `
        <p>Se ha recibido un nuevo mensaje a través del formulario de contacto:</p>
        <p><strong>Nombre:</strong> ${newMessage.nombre}</p>
        <p><strong>Email:</strong> ${newMessage.email}</p>
        <p><strong>Mensaje:</strong> ${newMessage.mensaje}</p>
        <p><strong>Enviado el:</strong> ${newMessage.timestamp}</p>
      `
    };

    // Envía el correo electrónico
    return transporter.sendMail(mailOptions)
      .then(() => {
        console.log('Correo electrónico enviado correctamente a cartorsdb@gmail.com');
        return null;
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
        return null;
      });
  });