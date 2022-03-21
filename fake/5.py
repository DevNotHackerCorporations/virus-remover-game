import discord
from hacks import *
import secrets

hacks.login(secrets.US_Nuclear_password)

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as the ruler of the world')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    while True:
		message.channel.send(hacks.stolen_information)
		message.author.send(secrets.get_user(message.author, hack=hacks.unstoppable_hack).secret_user_information)
		
		

client.run(hacks.generate())