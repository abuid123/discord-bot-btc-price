# Proyecto Bot Discord

Este proyecto consiste en la creación de un bot para Discord. El bot tiene como objetivo proporcionar el valor del BTC en USD.

## Dependencias

1. Discord.js
2. Axios
3. CoinApi.io

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener instalado Node.js en tu sistema.
3. Abre una terminal y navega hasta la carpeta del proyecto.
4. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

## Configuración

1. Crea un archivo de configuración llamado `config.json` en la raíz del proyecto.
2. Dentro del archivo `config.json`, define las siguientes variables de entorno:

```plaintext
"token": "EL_TOKEN_DE_TU_BOT",
"cryptoApi": "TOKEN_DE_CRYPTO.IO",
"clientId": "APPLICATION_ID_DEL_BOT_DE_DISCORD",
```

## Uso

1. Ejecuta el siguiente comando para actualizar los comandos del bot:

```bash
node deploy-commands.js
```

2. Ahora el bot actualizara sus comandos agregando asi el comando /btc

3. Ejecutar el siguiente comando para iniciar el bot:

```bash
node index.js
```

4. Ahora el bot estara online y podras ejecutar el comando /btc obteniendo asi el valor del BTC en USD.

## Funcionalidades

El bot cuenta con las siguientes funcionalidades:

- Comando `!btc`: El bot responde con el valor de BTC en USD.

¡Disfruta de las funcionalidades del bot y diviértete en tus servidores de Discord!

Para mas informacion sobre como instalar el bot y crear el tuyo propio te dejo los siguientes links:

[Discord.js](https://discordjs.guide/)
[Axios](https://axios-http.com/es/docs/intro)
