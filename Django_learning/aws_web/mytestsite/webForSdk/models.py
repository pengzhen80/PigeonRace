from django.db import models

# Create your models here.
# Create your models here.
class TextToTranslate(models.Model):
    title = models.CharField(null=False,blank=False,max_length=1000)
    content = models.TextField(null=True,blank=True)
    tanslatedContent = models.TextField(null=True,blank=True)
