from django.db import models

class Products(models.Model):
    title       = models.CharField(max_length= 50)
    description = models.CharField(max_length = 200)
    price       = models.IntegerField(default = 0)
    quantity    = models.IntegerField(default = 1)
    category    = models.CharField(max_length = 50)

    def __str__(self):
        return self.title + " " + str(self.price)


 # Products(Title, Description, Price, QuantityAvailable, CategoryName)