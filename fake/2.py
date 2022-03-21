# Python flask version of slack

from flask import Flask
import requests
import html
from slack import *

app = Flask("Slack")

@app.route('/')
def hello_world():
	slack = requests.get("example.com/slack/source_code.bat")
    return html.pythonify(slack)

app.run(0.0.0.0)