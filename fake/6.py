# Python flask version of slack

from flask import Flask, redirect

app = Flask("Todolist")

@app.route('/')
def hello_world():
    return redirect("example.com/todolist")

app.run(0.0.0.0)