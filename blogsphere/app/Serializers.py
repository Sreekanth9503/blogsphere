from rest_framework import serializers;
from .models import *
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Blog
        fields = "__all__"
        
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Review
        fields = "__all__"

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"