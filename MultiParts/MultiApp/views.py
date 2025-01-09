from rest_framework import viewsets
from django.shortcuts import get_object_or_404, render
from .models import Category, Part
from .serializers import CategorySerializer, PartSerializer
from rest_framework.decorators import action

from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

# Представления для API
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=False, methods=['get'])
    def root_categories(self, request):
        # Получаем корневые категории (категории без родителя)
        root_categories = Category.objects.filter(parent__isnull=True)
        serializer = self.get_serializer(root_categories, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def subcategories(self, request, pk=None):
        # Получаем подкатегории для категории с указанным ID
        category = self.get_object()  # Получаем категорию по ID (pk)
        subcategories = Category.objects.filter(parent=category)
        serializer = self.get_serializer(subcategories, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def second_line_categories(self, request):
        # Получаем подкатегории для указанной корневой категории
        root_category_id = request.query_params.get('root_category_id')

        if not root_category_id:
            return Response({'detail': 'root_category_id is required.'}, status=400)

        # Проверка на существование категории
        try:
            root_category = Category.objects.get(id=root_category_id)
        except Category.DoesNotExist:
            return Response({'detail': 'Root category not found.'}, status=404)

        # Получаем дочерние категории по ID родительской категории
        second_line_categories = Category.objects.filter(parent=root_category)

        # Если подкатегорий нет
        if not second_line_categories.exists():
            return Response({'detail': 'No subcategories found for this category.'}, status=404)

        serializer = self.get_serializer(second_line_categories, many=True)
        return Response(serializer.data)

class PartViewSet(viewsets.ModelViewSet):
    queryset = Part.objects.all()
    serializer_class = PartSerializer

    @action(detail=False, methods=['get'])
    def filter_by_category(self, request):
        # Фильтрация по категории
        category_id = request.query_params.get('category_id')

        if category_id is not None:
            parts = Part.objects.filter(category_id=category_id)
            serializer = PartSerializer(parts, many=True)
            return Response(serializer.data)
        else:
            return Response({'detail': 'category_id is required.'}, status=400)

# Обычное представление для детализации товара
def part_detail(request, part_id):
    part = get_object_or_404(Part, id=part_id)
    additional_fields = part.field_values.all()
    return render(request, 'part_detail.html', {'part': part, 'additional_fields': additional_fields})

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Вы успешно вышли из системы"}, status=status.HTTP_200_OK)
        except Exception:
            return Response({"error": "Ошибка при выходе"}, status=status.HTTP_400_BAD_REQUEST)

class MyApiView(APIView):
    permission_classes = [IsAuthenticated]  # Требуем аутентификацию

    def get(self, request):
        # В этом месте код, который будет выполняться для авторизованного пользователя
        user = request.user  # Получаем пользователя через токен
        return Response({'message': f'Hello {user.username}!'})


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]  # Только для аутентифицированных пользователей

    def get(self, request):
        user = request.user  # Данные текущего пользователя
        return Response({
            'username': user.username,
            'email': user.email,
            # Добавьте другие данные, которые вы хотите вернуть
        })
