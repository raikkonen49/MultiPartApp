from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, PartViewSet, part_detail

# Создаем роутер для API
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'parts', PartViewSet)

# Определяем URL-паттерны
urlpatterns = [
    path('', include(router.urls)),  # Включаем маршруты для API через роутер
    path('part/<int:part_id>/', part_detail, name='part_detail'),  # Маршрут для обычного представления
    path('categories/root_categories/', CategoryViewSet.as_view({'get': 'root_categories'}), name='root_categories'),  # Маршрут для корневых категорий
    path('categories/second_line_categories/', CategoryViewSet.as_view({'get': 'second_line_categories'}), name='second_line_categories'),  # Маршрут для категорий второй линии с фильтрацией
]
