from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings 
from django.contrib import admin




urlpatterns = [
    path('admin/', admin.site.urls),
    path("",include("resume.urls"))
]

# Development-only: Add static and media routes
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
