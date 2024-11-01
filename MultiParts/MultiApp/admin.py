from django.contrib import admin
from .models import Category, Part, PartFieldValue

class PartFieldValueInline(admin.TabularInline):
    model = PartFieldValue
    extra = 1

class PartAdmin(admin.ModelAdmin):
    inlines = [PartFieldValueInline]
    list_display = ('name', 'category', 'created_at')

admin.site.register(Category)
admin.site.register(Part, PartAdmin)
