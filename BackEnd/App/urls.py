from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('products',ProductViewSet, basename='product')

urlpatterns = []

urlpatterns += router.urls