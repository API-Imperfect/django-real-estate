from rest_framework.exceptions import APIException


class PropertyNotFound(APIException):
    status_code = 404
    deafult_detail = "The requested property does not exist"
