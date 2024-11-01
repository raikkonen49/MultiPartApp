from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='category_images/', null=True, blank=True)  # Поле для фото

    def __str__(self):
        return self.name

    def get_subcategories(self):
        """Метод для получения подкатегорий"""
        return Category.objects.filter(parent=self)

class Part(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey('Category', on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    price = models.CharField(max_length=20, blank=True, null=True)
    image_url = models.CharField(blank=True, null=True)

    def __str__(self):
        return self.name

    @classmethod
    def get_parts_by_category(cls, category_id):
        """Метод для получения всех товаров по категории"""
        return cls.objects.filter(category_id=category_id)

class PartFieldValue(models.Model):
    part = models.ForeignKey(Part, related_name='field_values', on_delete=models.CASCADE)
    field_name = models.CharField(max_length=100)
    field_value = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.field_name}: {self.field_value}"
