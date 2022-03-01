const { MessageEmbed } = require("discord.js");
module.exports = {
  name: 'volume',
  aliases: ["vol"],
  description: 'Set Volume Music',
 category: 'Music',
  run: async (client, message, args) => {
    const { color } = client.config;
    const queue = message.client.distube.getQueue(message);

        if(!queue) {
            const embed = new MessageEmbed()
                .setColor(color)
                .setDescription(`There is no music playing.`);
            return message.channel.send(embed);
        }

        const volume = parseInt(args[0])

        if (isNaN(volume)) {
            const embed = new MessageEmbed()
                .setColor(color)
                .setDescription(`Please enter a valid number!`);
            return message.channel.send(embed);
        }
        
        message.client.distube.setVolume(message, volume);

       
        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`**Volume** set to \`${volume}\``)
            .setFooter(`Music | \©️${new Date().getFullYear()} ${client.config.foot}`);
        message.channel.send(embed);
    }
}