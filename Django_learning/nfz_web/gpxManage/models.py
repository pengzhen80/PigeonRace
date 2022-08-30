from django.db import models

# # Create your models here.
# class GpxFile(models.Model):
#     """model  representing a gpx file"""
#     name = models.CharField(max_length=200, help_text="Enter the name of the gpx file")

#     def __str__(self) -> str:
#         """return a string representation of the model"""
#         return super().__str__()

# from django.urls import reverse

# class GpxData(models.Model):
#     """model representing a gpx data"""
#     # gpx_file = models.ForeignKey(GpxFile, on_delete=models.CASCADE, related_name='gpx_data')
#     pathName = models.CharField(max_length=200, help_text="the name of the gpx file")
#     polygonPoints = models.Choices()

#     latitude = models.FloatField(help_text="Enter the latitude of the gpx data")
#     longitude = models.FloatField(help_text="Enter the longitude of the gpx data")
#     time = models.DateTimeField(help_text="Enter the time of the gpx data")
#     speed = models.FloatField(help_text="Enter the speed of the gpx data")

#     def __str__(self) -> str:
#         """return a string representation of the model"""
#         return super().__str__()

#     def get_absolute_url(self):
#         """return the url to access a detail record for this gpx data"""
#         return reverse('gpx_data-detail', args=[str(self.id)])