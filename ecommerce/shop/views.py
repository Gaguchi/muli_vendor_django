from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Order, User

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    data = [product.to_json() for product in products]
    return JsonResponse(data, safe=False)

def order_list(request):
    orders = Order.objects.all()
    data = [order.to_json() for order in orders]
    return JsonResponse(data, safe=False)

def user_list(request):
    users = User.objects.all()
    data = [user.to_json() for user in users]
    return JsonResponse(data, safe=False)