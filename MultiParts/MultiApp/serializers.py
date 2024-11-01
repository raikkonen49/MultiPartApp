from rest_framework import serializers
from .models import Category, Part, PartFieldValue

class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'image', 'image_url']  # Добавляем поле для изображения

    # Метод для получения полного URL изображения
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

class PartFieldValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartFieldValue
        fields = '__all__'

class PartSerializer(serializers.ModelSerializer):
    field_values = PartFieldValueSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)  # Добавляем категорию с изображением

    class Meta:
        model = Part
        fields = ['id', 'name', 'description', 'category', 'created_at', 'field_values']
