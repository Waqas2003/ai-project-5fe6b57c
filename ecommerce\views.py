from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Product, Category, Order
from .serializers import ProductSerializer, CategorySerializer, OrderSerializer

class ProductViewSet(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryViewSet(APIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class OrderViewSet(APIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer