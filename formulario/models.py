
from django.db import models

# Create your models here.


class TipoVehiculo(models.Model):

    idTipo = models.IntegerField(primary_key=True, verbose_name='Id tipo')
    descripcion = models.CharField(max_length=50, verbose_name='Tipo de vehiculo')

    def __str__(self):
        return self.descripcion


class Vehiculo(models.Model):
    numero= models.CharField(max_length=6, primary_key=True, verbose_name='Numero de vehiculo')
    marca = models.CharField(max_length=20, verbose_name='Marca')
    modelo = models.CharField(max_length=20, null=True, blank=True, verbose_name='Modelo')
    annio = models.IntegerField(max_length=4, null=True, blank=True, verbose_name='Año')
    tipo = models.ForeignKey(TipoVehiculo, on_delete=models.CASCADE)


    def __str__(self):
        return self.numero

class Refaccion(models.Model):
    idRefaccion = models.IntegerField(max_length=6, primary_key=True, verbose_name='ID Refaccion')
    nombreRefaccion = models.CharField(max_length=20, verbose_name='Nombre refaccion')
    tipoRefaccion = models.CharField(max_length=20, verbose_name='Tipo refaccion')
    vehiculo = models.ForeignKey(Vehiculo, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombreRefaccion
