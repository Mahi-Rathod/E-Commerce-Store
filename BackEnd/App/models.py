from django.db import models

class Products(models.Model):
    title       = models.CharField(max_length= 50)
    description = models.CharField(max_length = 200)
    quantity    = models.CharField(max_length = 200)
    price       = models.CharField(max_length = 200)
    category    = models.CharField(max_length = 50)
    image       = models.ImageField(upload_to='images/', default="")

    def __str__(self):
        return self.title + " " + str(self.price)


 # Products(Title, Description, Price, QuantityAvailable, CategoryName)