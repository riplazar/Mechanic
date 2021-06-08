from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'formulario/index.html')

def servicios(request):
    return render(request,'formulario/servicios.html')