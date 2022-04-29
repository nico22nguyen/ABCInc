from json import dumps

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ..utils import getBody

@csrf_exempt
def getClients(request):
  if request.method != 'GET':
    response = HttpResponse('Expected GET request')
    response.status_code = 405

    return response

  maxClients = request.GET.get('max', None)

  # get maxClients clients from database
  # ------
  # ------

  resp_body = {
    'clients': [ """ list of clients """]
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

@csrf_exempt
def getClientById(request, clientId):
  if request.method != 'GET':
    response = HttpResponse('Expected GET request')
    response.status_code = 405

    return response

  # get client by id from database
  # ------
  # ------

  resp_body = {
    'client': ""# client from db 
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

@csrf_exempt
def createClient(request):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  try:
    body = getBody(request)
    client = body['client']
  except:
    response = HttpResponse('Expected client in request body')
    response.status_code = 400

    return response


  # create client in database
  # ------
  # ------

  resp_body = {
    'client': client
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

@csrf_exempt
def removeClient(request):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  body = getBody(request)
  clientId = body['clientId']

  # remove client in database
  # ------
  # ------

  resp_body = {
    'client': clientId
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

@csrf_exempt
def updateClient(request):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  body = getBody(request)
  clientId = body['clientId']
  clientInfo = body['client']

  # update client in database
  # ------
  # ------

  resp_body = {
    'client': clientId
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')