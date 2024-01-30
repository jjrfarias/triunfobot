// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
import { create } from 'venom-bot';

venom
  .create({
    session: 'session-name', //name of session
    headless: false
  } )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  const btnindice = [
    {
      "buttonText": {
        "id": "idl",
        "displayText": "Indicador de Lingada"
        }
      },
    {
      "buttonText": {
        "id": "irc",
        "displayText": "Indicador de Recebimento"
        }
      },
      {
        "buttonText": {
          "id": "iec",
          "displayText": "Indicador de Expedição"
        }
      }
    ]
    const btnagendamento = [
      {
        "buttonText": {
          "id": "Abertos",
          "displayText": "Próximas Coletas agendadas"
          }
        },
      {
        "buttonText": {
          "id": "Quantidade",
          "displayText": "Quantidade de Agendamentos"
          }
        }
      ]
function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Indice' || message.body === 'INDICE' || message.body === 'índice' || message.body === 'Índice' || message.body === 'ÍNDICE' || message.body === 'indice' && message.isGroupMsg === false) {
      client.sendButtons(message.from, 'Indicadores de desempenho', btnindice,'SLA - LON2')
        .then((result) => {
        console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
        });
    }        
    if (message.body === 'Agendamento' && message.isGroupMsg === false) {
      client.sendButtons(message.from, 'Controle de Agendamentos', btnagendamento,'Agendamentos - LON2')
        .then((result) => {
        console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
        });
    }
    if (message.body === 'idl' || message.body === 'Idl' || message.body === 'IDl' || message.body === 'IDL' || message.body === 'Indicador de Lingada' ) {
        client.sendFile(
              message.from,
              'C:\\Users\\jorge.farias\\OneDrive - TRIUNFO LOGÍSTICA LTDA\\Área de Trabalho\\Triunfo\\Indicadores\\images\\idl.jpg',
              'IDL - LON2',
              'Indice de Lingadas'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
      if (message.body === 'irc' || message.body === 'Irc' || message.body === 'IRc' || message.body === 'IRC' || message.body === 'Indicador de Recebimento' && message.isGroupMsg === false) {
        client.sendFile(
              message.from,
              'C:\\Users\\jorge.farias\\OneDrive - TRIUNFO LOGÍSTICA LTDA\\Área de Trabalho\\Triunfo\\Indicadores\\images\\irc.jpg',
              'IRC - LON2',
              'Indice de Recebimento de Cargas'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
      if (message.body === 'Próximas Coletas agendadas' && message.isGroupMsg === false) {
        client.sendFile(
              message.from,
              'C:\\Users\\jorge.farias\\OneDrive - TRIUNFO LOGÍSTICA LTDA\\Área de Trabalho\\Triunfo\\Indicadores\\images\\agendamentos.png',
              'AGENDAMENTOS - LON2',
              'AGENDAMENTOS - LON2'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
      if (message.body === 'iec' || message.body === 'IEC' || message.body === 'Iec' || message.body === 'Indicador de Expedição' && message.isGroupMsg === false) {
        client.sendFile(
              message.from,
              'C:\\Users\\jorge.farias\\OneDrive - TRIUNFO LOGÍSTICA LTDA\\Área de Trabalho\\Triunfo\\Indicadores\\images\\iec.png',
              'IEC - LON2',
              'Indice de expedição de Cargas'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
  });
}
