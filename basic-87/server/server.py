from models import Player
from models import Sensor
import datetime, time

bob = Player(0, "Bob", {"name": "Bob","age": 25,"weight": 180,"height": 6.3})
sensor = Sensor(1, "arduino101", "Bob's Helmet")
bob.associate_sensor(sensor)

from flask import Flask, request, jsonify
app = Flask("Sports Medicine Manager")

@app.route('/api/send_event', methods=["POST"])
def send_event():
	sensor.add_datapoint(int(time.time()*1000), float(request.get_data().decode("ascii", "ignore").strip()))
	return 'OK'

@app.route("/api/get_datapoints")
def get_datapoints():
	return jsonify({"data":sensor.data})

@app.route("/api/get_player_bio")
def get_player_bio():
	return jsonify({"info":bob.info})

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
	app.run("0.0.0.0")