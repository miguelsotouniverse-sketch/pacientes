// config.js — Lo que cambia sin tocar la app.
window.APP_CONFIG = {
  // Dirección del backend en Railway (servicio "app-pacientes").
  API: 'https://app-pacientes-api-production.up.railway.app',

  // Debe coincidir con AVISO_VERSION del backend. Al cambiar el texto del aviso,
  // se sube la versión en los dos lados y todas las pacientes lo vuelven a aceptar.
  AVISO_VERSION: '2026-10-borrador',

  WHATSAPP: '525561906118',          // Michelle
  URGENCIAS: '+525562234133',        // Recepción del consultorio (para llamar)
  URGENCIAS_TEXTO: '55 6223 4133',

  // BORRADOR — pendiente de revisión del Lic. Lomelí. No lanzar a pacientes con este texto.
  AVISO_HTML: `
    <p>El Dr. Miguel Soto, con consultorio en Miramontes 2342, Coyoacán, C.P. 04460, Ciudad de México, es responsable del tratamiento de los datos personales que usted consulte en esta app.</p>
    <p><strong>Qué datos usa la app.</strong> Su número celular para identificarle y enviarle su código de acceso, y la información que ya forma parte de su atención con nosotros: cotizaciones, indicaciones, receta y citas. Parte de esta información son datos de salud, considerados datos personales sensibles, por lo que pedimos su consentimiento expreso.</p>
    <p><strong>Para qué.</strong> Mostrarle su información, enviarle recordatorios de medicamentos y avisos sobre sus citas y documentos.</p>
    <p><strong>Quién más interviene.</strong> Proveedores de tecnología que procesan la información por nuestra cuenta y bajo nuestras instrucciones: alojamiento de la app y de su base de datos, servicios de Google donde resguardamos documentos, y el servicio de WhatsApp por el que enviamos su código. Sus servidores pueden estar fuera de México. Ninguno usa sus datos para fines propios.</p>
    <p><strong>Comunicaciones comerciales.</strong> Son opcionales y se autorizan aparte. Puede activarlas o desactivarlas en cualquier momento desde Ajustes, sin que eso afecte los avisos sobre su tratamiento.</p>
    <p><strong>Sus derechos.</strong> Puede acceder, rectificar, cancelar u oponerse al uso de sus datos, o revocar este consentimiento, solicitándolo en el consultorio. Puede eliminar su cuenta de la app desde Ajustes; su expediente clínico se conserva conforme a la NOM-004-SSA3-2012.</p>
    <p>El aviso de privacidad integral está disponible en el consultorio.</p>
  `,
};
