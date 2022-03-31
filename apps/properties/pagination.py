from rest_framework.pagination import PageNumberPagination


class PropertyPagination(PageNumberPagination):
    page_size = 4
