"""Module providingClass for orm"""
from django.db import models
# from django.contrib.postgres.fields import ArrayField
# from django.contrib.postgres.fields import JSONField

class AuthUser(models.Model):
    """
        A class to represent auth user.
    """
    userid = models.TextField(primary_key=True)
    username = models.TextField(blank=True)
    email = models.TextField(blank=True)
    password = models.TextField(blank=True)
    region = models.TextField(blank=True)
    address = models.TextField(blank=True)
    level = models.IntegerField(blank=True)
    timezone = models.TextField(blank=True)
    note = models.TextField(blank=True)
    isactive = models.BooleanField(default=False)
    lastlogin = models.DateTimeField(blank=True)

    def __str__(self):
        '''
        Returns the primary key of model
            Returns:
            userid(str):primary key of row
        '''
        return str(self.userid)

    class Meta:
        """
        A class to represent parent class meta.
        ...

        Attributes
        ----------
        managed : bool
            True 可以 migrate 同步後可以進行新刪修查, Flase 只能查詢
        db_table : str
            name of table
        app_label : str
            app label of model

        Methods
        -------
        """
        managed = True 
        db_table = 'auth_user'
        app_label = 'AuthApp'
