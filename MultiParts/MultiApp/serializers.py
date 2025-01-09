from rest_framework import serializers
from .models import Category, Part, PartFieldValue
from django.contrib.auth.models import User

class PartFieldValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartFieldValue
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    subcategories = serializers.SerializerMethodField()  # Добавляем поле для подкатегорий

    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'image', 'image_url', 'subcategories']

    def get_image_url(self, obj):
        # Генерация полного URL для изображения
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    def get_subcategories(self, obj):
        # Получаем подкатегории для текущей категории
        subcategories = Category.objects.filter(parent=obj)
        return CategorySerializer(subcategories, many=True, context=self.context).data

class PartSerializer(serializers.ModelSerializer):
    field_values = PartFieldValueSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)  # Сериализатор для категории товара
    price = serializers.CharField(required=False, allow_blank=True)  # Поле price
    image_url = serializers.CharField(required=False, allow_blank=True)  # Поле image_url

    class Meta:
        model = Part
        fields = ['id', 'name', 'description', 'category', 'created_at', 'field_values', 'price', 'image_url']  # Добавили price и image_url


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    password2 = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Пароли не совпадают"})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        return User.objects.create_user(**validated_data)
