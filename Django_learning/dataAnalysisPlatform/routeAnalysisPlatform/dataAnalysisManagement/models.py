from django.db import models
# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100,null=False,default='')
    password = models.CharField(max_length=100,null=False,default='')
    mxID = models.CharField(max_length=100,null=False,primary_key=True,default='')

    class Meta:
        ordering = []
        indexes = [
            models.Index(fields=['name',]),
        ]

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
     
class Activity(models.Model):
    activityID = models.CharField(max_length=100,null=False,primary_key=True)
    mxID = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    activityName = models.CharField(max_length=100,null=False)
    releaseDate = models.CharField(max_length=100,null=False)
    releaseTime = models.CharField(max_length=100,null=False)

    class Meta:
        ordering = []

class TrainRecord(models.Model):
    trainRecordId = models.CharField(max_length=100,null=False,primary_key=True)
    activityID = models.ForeignKey(
        'Activity',
        on_delete=models.CASCADE,
    )
    mxID = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    recordName = models.CharField(max_length=100,null=True)
    settingTime = models.DateTimeField(auto_now=False,auto_now_add=False,null=True)
    periodicMode = models.CharField(max_length=100,null=True)
    startTime = models.DateTimeField(auto_now=False,auto_now_add=False,null=True)
    endTime = models.DateTimeField(auto_now=False,auto_now_add=False,null=True)
    straightDistance = models.FloatField(null=True)
    straightSpeed = models.FloatField(null=True)
    realDistance = models.FloatField(null=True)
    realSpeed = models.FloatField(null=True)
    startPosition = models.CharField(max_length=100,null=True)
    startLatitude = models.FloatField(null=True)
    startLongitude = models.FloatField(null=True)
    goalLatitude = models.FloatField(null=True)
    goalLongitude = models.FloatField(null=True)
    note = models.TextField(null=True)
    settingTimeUpload = models.BooleanField(default=False,null=True)
    completeUpload = models.BooleanField(default=False,null=True)
    updateTime = models.CharField(max_length=100,null=True)
    fixNum = models.PositiveIntegerField(null=True)

    class Meta:
        ordering = []
        indexes = [
            models.Index(fields=['mxID','settingTime']),
        ]

class Module(models.Model):
    moduleID = models.CharField(max_length=100,null=False,primary_key=True)
    mxID = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
    )
    ringID =  models.CharField(max_length=100,null=True)
    lazerID = models.CharField(max_length=100,null=True)
    fixedID = models.CharField(max_length=100,null=True)
    firmwareVer = models.CharField(max_length=100,null=True)
    fake99 = models.BooleanField(default=False,null=True)

class LocusText(models.Model):
    locusID = models.CharField(max_length=100,null=False,primary_key=True)
    trainRecordID = models.ForeignKey(
        'TrainRecord',
        on_delete=models.CASCADE,
    )
    moduleID =  models.ForeignKey(
        'Module',
        on_delete=models.CASCADE,
    )
    UTC = models.DateTimeField(auto_now=False,auto_now_add=False,null=True)
    fix = models.CharField(max_length=100,null=True)
    Latitude = models.FloatField(null=True)
    Longitude = models.FloatField(null=True)
    highlight = models.BooleanField(default=False,null=True)
    realDistance = models.FloatField(null=True)
    gpsHeight = models.FloatField(null=True)
    height = models.FloatField(null=True)
    gpsSpeed = models.FloatField(null=True)
    speed = models.FloatField(null=True)
    direction = models.IntegerField(null=True)
    satNum = models.IntegerField(null=True)
    HDOP = models.IntegerField(null=True)
    upload = models.BooleanField(default=False,null=True)

    class Meta:
        indexes = [
            models.Index(fields=['moduleID',]),
        ]
