from rest_framework import viewsets
from django.shortcuts import get_object_or_404, render
from .models import Category, Part
from .serializers import CategorySerializer, PartSerializer
from rest_framework.response import Response
from rest_framework.decorators import action

# Представления для API
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=False, methods=['get'])
    def root_categories(self, request):
        # Получаем корневые категории
        root_categories = Category.objects.filter(parent__isnull=True)
        serializer = self.get_serializer(root_categories, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def second_line_categories(self, request):
        root_category_id = request.query_params.get('root_category_id')

        if not root_category_id:
            return Response({'detail': 'root_category_id is required.'}, status=400)

        # Получаем дочерние категории по ID родительской категории
        second_line_categories = Category.objects.filter(parent_id=root_category_id)

        serializer = self.get_serializer(second_line_categories, many=True)
        return Response(serializer.data)

class PartViewSet(viewsets.ModelViewSet):
    queryset = Part.objects.all()
    serializer_class = PartSerializer

# Обычное представление
def part_detail(request, part_id):
    part = get_object_or_404(Part, id=part_id)
    additional_fields = part.field_values.all()
    return render(request, 'part_detail.html', {'part': part, 'additional_fields': additional_fields})
