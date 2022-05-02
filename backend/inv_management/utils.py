from os import getenv
from json import loads
from MySQLdb import connect
from dotenv import load_dotenv

# extracts the body of a post request
def getBody(request):
  body_unicode = request.body.decode('utf-8')
  return loads(body_unicode)

load_dotenv()
dbconnect = connect("localhost", getenv('DB_USER'), getenv('DB_PASS'), getenv('DB_NAME'))
cursor = dbconnect.cursor()