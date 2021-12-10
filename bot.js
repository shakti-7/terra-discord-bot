import dotenv from 'dotenv'
dotenv.config()

import Discord from 'discord.js'

import { aboutData } from './data/aboutData'
import { memberData } from './data/memberData'

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag}`)
  
})

client.on('message', function(message){
  if(message.author.bot)
    return
  const pre = "#"
  if (!message.content.startsWith(pre))
    return
  const args = message.content.split(' ')
  const command = args[0]
  if(command==="#tellmeabout") {
    const tellme = aboutData.find(obj => obj.name===args[1])
    const embed = new Discord.MessageEmbed().setColor('#85850d')
    embed.description = tellme.about
    message.reply(embed)
  }
  else if(command==="#TTspeaker") {
    const index = Math.floor(Math.random()*29);
    const embed = new Discord.MessageEmbed().setColor('#85850d')
    embed.description = memberData[index]
    message.reply(embed)
  }
})

client.login(process.env.CLIENT_TOKEN)