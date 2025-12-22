from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField()
    story = models.TextField()

class Review(models.Model):
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    review = models.TextField()
    blogId = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='reviews')
    
class Author(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    role = models.CharField(max_length=10, default='author', editable=False)
    