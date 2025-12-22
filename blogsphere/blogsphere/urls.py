from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from rest_framework.routers import DefaultRouter
from app.views import BlogViewSet, ReviewViewSet, AuthorViewSet

# 🔹 DRF Router (PROJECT LEVEL)
router = DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blogs')
router.register(r'reviews', ReviewViewSet, basename='reviews')
router.register(r'authors', AuthorViewSet, basename='authors')

urlpatterns = [
    path('admin/', admin.site.urls),

    # ✅ PROJECT-LEVEL API ROUTES
    path('api/', include(router.urls)),

    # ✅ REACT CATCH-ALL (single server)
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
