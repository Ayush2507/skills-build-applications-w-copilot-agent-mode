from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()


        # Create Teams with string IDs
        marvel = Team.objects.create(team_id='marvel', name='Marvel')
        dc = Team.objects.create(team_id='dc', name='DC')

        # Create Users with team_id
        users = [
            User.objects.create_user(username='ironman', email='ironman@marvel.com', team_id='marvel'),
            User.objects.create_user(username='captainamerica', email='cap@marvel.com', team_id='marvel'),
            User.objects.create_user(username='batman', email='batman@dc.com', team_id='dc'),
            User.objects.create_user(username='superman', email='superman@dc.com', team_id='dc'),
        ]

        # Create Activities with user_id
        activities = [
            Activity.objects.create(user_id=users[0].id, type='run', duration=30),
            Activity.objects.create(user_id=users[1].id, type='cycle', duration=45),
            Activity.objects.create(user_id=users[2].id, type='swim', duration=60),
            Activity.objects.create(user_id=users[3].id, type='walk', duration=20),
        ]

        # Create Workouts
        workouts = [
            Workout.objects.create(name='Cardio Blast', description='High intensity cardio workout'),
            Workout.objects.create(name='Strength Builder', description='Strength training routine'),
        ]

        # Create Leaderboard with team_id
        Leaderboard.objects.create(team_id='marvel', points=100)
        Leaderboard.objects.create(team_id='dc', points=90)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
