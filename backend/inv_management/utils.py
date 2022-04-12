from json import loads

# extracts the body of a post request
def getBody(request):
  body_unicode = request.body.decode('utf-8')
  return loads(body_unicode)