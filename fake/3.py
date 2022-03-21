import among_us as au
import time
import random

class Among_us():
	def __init__(self, gameid):
		self.id = gameid
		self.role = self.get_role()
		self.play()

	def get_role(self):
		return random.choice(au.roles)

	def play(self):
		while True:
			input("What do you want to do?")
			time.sleep(1)

	def task(self):
		print("Task completed")

	def end(self, message):
		au.hack(message)
		return

	def emergency(self):
		self.end("The imposter won")