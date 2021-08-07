require('dotenv').config()
const { Client } = require('discord.js')

const client = new Client()

client.on('ready', () => {
  console.log(`${client.user.tag}`)
})

client.login(process.env.CLIENT_TOKEN)