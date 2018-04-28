from django.db import models


class Information(models.Model):
    name = models.CharField(max_length=30)
    story = models.CharField(max_length=1000)

    def __str__(self):
        return self.name