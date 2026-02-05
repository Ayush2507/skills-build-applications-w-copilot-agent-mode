from djongo import models
from django.contrib.auth.models import AbstractUser


class Team(models.Model):
    team_id = models.CharField(max_length=24, primary_key=True)
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class User(AbstractUser):
    email = models.EmailField(unique=True)
    team_id = models.CharField(max_length=24, null=True, blank=True)

class Activity(models.Model):
    user_id = models.CharField(max_length=24)
    type = models.CharField(max_length=50)
    duration = models.IntegerField()  # minutes

class Workout(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Leaderboard(models.Model):
    team_id = models.CharField(max_length=24)
    points = models.IntegerField()
