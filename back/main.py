import utils
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
app = Flask(__name__)
api=Api(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

class Predict(Resource):
    def get(self):
        _, prediction = utils.pred("./imgs/tomato_1.jpg")
        return {"prediction": prediction }

    def post(self):
        imagefile = request.files.get('img', '')
        imagefile.save('./prueba.jpg')
        _, prediction = utils.pred("./prueba.jpg")
        return {"pred": prediction}

api.add_resource(Predict, "/")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)