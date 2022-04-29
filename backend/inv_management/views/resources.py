from json import dumps

from django.http import HttpResponse
from ..utils import getBody

def getResources(request, clientId, inventoryId):
  if request.method != 'GET':
    response = HttpResponse('Expected GET request')
    response.status_code = 405

    return response

  maxResources = request.GET.get('max', None)

  # get maxResources resources from database
  # ------
  # ------

  resp_body = {
    'resources': [ """ list of resources """]
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

def getResourceById(request, clientId, inventoryId, resourceId):
  if request.method != 'GET':
    response = HttpResponse('Expected GET request')
    response.status_code = 405

    return response

  print(clientId, inventoryId, resourceId)
  # get resource by id from database
  # ------
  # ------

  resp_body = {
    'resource': ""# resource from db 
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

def createResource(request, clientId, inventoryId):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  body = getBody(request)
  resource = body['resource']

  # create resource in database
  # ------
  # ------

  resp_body = {
    'resource': resource
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

def removeResource(request, clientId, inventoryId):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  body = getBody(request)
  resourceId = body['resourceId']

  # remove resource in database
  # ------
  # ------

  resp_body = {
    'resource': resourceId
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')

def updateResource(request, clientId, inventoryId):
  if request.method != 'POST':
    response = HttpResponse('Expected POST request')
    response.status_code = 405

    return response

  body = getBody(request)
  resourceId = body['resourceId']
  resourceInfo = body['resource']

  # update resource in database
  # ------
  # ------

  resp_body = {
    'resource': resourceId
  }

  return HttpResponse(dumps(resp_body), content_type='application/json')