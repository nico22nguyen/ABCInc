from django.urls import path, include
from .views import *

# urls for /contacts route
contactUrls = [
    path('', contacts.getContacts),
    path('create', contacts.createContact),
    path('remove', contacts.removeContact),
    path('update', contacts.updateContact),
    path('<str:contactId>', contacts.getContactById),
]

# urls for /clients route
clientUrls = [
    path('', clients.getClients),
    path('create', clients.createClient),
    path('remove', clients.removeClient),
    path('update', clients.updateClient),
    path('contacts/<str:clientId>/', include(contactUrls)),
    path('<str:clientId>', clients.getClientById),
]

# urls for /inventories route
inventoryUrls = [
    path('', inventories.getInventories),
    path('create', inventories.createInventory),
    path('remove', inventories.removeInventory),
    path('update', inventories.updateInventory),
    path('<str:inventoryId>', inventories.getInventoryById),
]

# urls for /resources route
resourceUrls = [
    path('', resources.getResources),
    path('create', resources.createResource),
    path('remove', resources.removeResource),
    path('update', resources.updateResource),
    path('<str:resourceId>', resources.getResourceById),
]

# urls for /logs route
logUrls = [
    path('', logs.getLogs),
    path('clients/<str:clientId>', logs.getClientLogs),
    path('contacts/<str:clientId>/<str:contactId>', logs.getContactLogs),
    path('inventories/<str:clientId>/<str:inventoryId>', logs.getInventoryLogs),
    path('resources/<str:clientId>/<str:inventoryId>/<str:resourceId>', logs.getResourceLogs),
]

# master array of urls
apiurls = [
    path('login', login.login),
    path('clients/', include(clientUrls)),
    path('inventories/<str:clientId>/', include(inventoryUrls)),
    path('resources/<str:clientId>/<str:inventoryId>/', include(resourceUrls)),
    path('logs/', include(logUrls)),
    # TEST
    path('test/', test.test)
]

# lump all paths under api route
urlpatterns = [
    path('api/', include(apiurls))
]
