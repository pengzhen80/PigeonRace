from django.db import models
# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100,primary_key=True,null=False)
    password = models.CharField(max_length=100,null=False)
    mxID = models.CharField(max_length=100,null=False)

class Pigeon(models.Model):
    doveID = models.CharField(max_length=100,null=False,primary_key=True)
    mxId = models.CharField(max_length=100,null=False)
    doveName = models.CharField(max_length=100,null=True,blank=True)
    RFID = models.CharField(max_length=100,null=True,blank=True)
    URing = models.CharField(max_length=100,null=True,blank=True)
    photo=models.ImageField(null=True,blank=True,upload_to='images/')
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

    def test_get_id(self):
        return self.id
    
    class Meta:
        ordering = []

class TrainRecord_filters_summary(models.Model):
    trainRecordId = models.CharField(max_length=100,null=False,primary_key=True)
    startIndex =models.CharField(max_length=100,null=False)  
    endIndex   =models.CharField(max_length=100,null=True)  
    updateTime =models.CharField(max_length=100,null=False)                
    realDistance  = models.CharField(max_length=100,null=False)         
    realSpeed     = models.CharField(max_length=100,null=False)         
    straightDistance  = models.CharField(max_length=100,null=False)       
    straightSpeed     = models.CharField(max_length=100,null=False)       
    routeEfficiency   = models.CharField(max_length=100,null=False)       
    settingTime       = models.CharField(max_length=100,null=False)       

    class Meta:
        ordering = []
     
