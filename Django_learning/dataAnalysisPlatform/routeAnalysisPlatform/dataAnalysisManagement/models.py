from django.db import models
# Create your models here.
class User(models.Model):
    mxID = models.CharField(max_length=100,null=True,blank=True)

class Pigeon(models.Model):
    doveID = models.CharField(max_length=100,null=False,primary_key=True)
    # doveID = models.CharField(max_length=100,null=False)
    # mxID = models.ForeignKey(User, on_delete=models.CASCADE)
    mxId = models.CharField(max_length=100,null=False)
    doveName = models.CharField(max_length=100,null=True,blank=True)
    RFID = models.CharField(max_length=100,null=True,blank=True)
    URing = models.CharField(max_length=100,null=True,blank=True)
    photo=models.ImageField(null=True,blank=True,upload_to='images/')
    # photo = FilerImageField(null=True, blank=True,related_name="pigeonPhotos",on_delete=models.CASCADE)
    eye = models.ImageField(null=True,blank=True,upload_to='images/')
    sex = models.CharField(max_length=100,null=True,blank=True)
    age = models.CharField(max_length=100,null=True,blank=True)
    bodyLength = models.CharField(max_length=100,null=True,blank=True)
    wingLength = models.CharField(max_length=100,null=True,blank=True)
    weight = models.CharField(max_length=100,null=True,blank=True)
    color = models.CharField(max_length=100,null=True,blank=True)
    breed = models.CharField(max_length=100,null=True,blank=True)
    father = models.CharField(max_length=100,null=True,blank=True)
    mother = models.CharField(max_length=100,null=True,blank=True)
    desc = models.CharField(max_length=100,null=True,blank=True)
    fatherFather = models.CharField(max_length=100,null=True,blank=True)
    fatherMother = models.CharField(max_length=100,null=True,blank=True)
    motherFather = models.CharField(max_length=100,null=True,blank=True)
    motherMother = models.CharField(max_length=100,null=True,blank=True)
    note = models.CharField(max_length=100,null=True,blank=True)
    
    class Meta:
        ordering = []